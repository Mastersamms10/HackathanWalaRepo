import React, { useState } from 'react';
import { AlertCircle, User, Lock, Hash } from 'lucide-react';
import styles from './PatientLoginForm.module.css';
import { useNavigate } from 'react-router-dom'
interface FormData {
  patientId: string;
  patientName: string;
  password: string;
}

interface FormErrors {
  patientId?: string;
  patientName?: string;
  password?: string;
}

const PatientLoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    patientId: '',
    patientName: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Patient ID validation
    if (!formData.patientId.trim()) {
      newErrors.patientId = 'Patient ID is required';
    } else if (formData.patientId.trim().length < 3) {
      newErrors.patientId = 'Patient ID must be at least 3 characters';
    }

    // Patient Name validation
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Patient name must be at least 2 characters';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login attempt:', formData);
        alert('Login successful! (This is a demo)');
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
const navigate = useNavigate();
const re= ()=>{
navigate('/registerP');
}
const re3= ()=>{
navigate('/dashP');
}
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Patient Portal</h1>
          <p className={styles.subtitle}>Please sign in to access your account</p>
        </div>

        <form onSubmit={re3} className={styles.form} noValidate>
          <div className={styles.fieldGroup}>
            <label htmlFor="patientId" className={styles.label}>
              <Hash className={styles.icon} style={{ display: 'inline', marginRight: '0.375rem' }} />
              Patient ID
            </label>
            <input
              id="patientId"
              type="text"
              value={formData.patientId}
              onChange={handleInputChange('patientId')}
              placeholder="Enter your patient ID"
              className={`${styles.input} ${errors.patientId ? styles.error : ''}`}
              aria-invalid={errors.patientId ? 'true' : 'false'}
              aria-describedby={errors.patientId ? 'patientId-error' : undefined}
            />
            {errors.patientId && (
              <div id="patientId-error" className={styles.errorMessage} role="alert">
                <AlertCircle className={styles.icon} />
                {errors.patientId}
              </div>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="patientName" className={styles.label}>
              <User className={styles.icon} style={{ display: 'inline', marginRight: '0.375rem' }} />
              Patient Name
            </label>
            <input
              id="patientName"
              type="text"
              value={formData.patientName}
              onChange={handleInputChange('patientName')}
              placeholder="Enter your full name"
              className={`${styles.input} ${errors.patientName ? styles.error : ''}`}
              aria-invalid={errors.patientName ? 'true' : 'false'}
              aria-describedby={errors.patientName ? 'patientName-error' : undefined}
            />
            {errors.patientName && (
              <div id="patientName-error" className={styles.errorMessage} role="alert">
                <AlertCircle className={styles.icon} />
                {errors.patientName}
              </div>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password" className={styles.label}>
              <Lock className={styles.icon} style={{ display: 'inline', marginRight: '0.375rem' }} />
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              placeholder="Enter your password"
              className={`${styles.input} ${errors.password ? styles.error : ''}`}
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <div id="password-error" className={styles.errorMessage} role="alert">
                <AlertCircle className={styles.icon} />
                {errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            
            disabled={isSubmitting}
            className={styles.submitButton}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Not yet registered?{' '}
            <button onClick={re} className={styles.footerLink}>
              Register now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientLoginForm;