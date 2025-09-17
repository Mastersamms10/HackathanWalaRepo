import React, { useState, ChangeEvent, FormEvent } from 'react';
import { User, Hash, AlertCircle } from 'lucide-react';
import styles from './PatientLoginForm.module.css';
import { useNavigate } from 'react-router-dom';

interface FormData {
  patientId: string;
  patientName: string;
}

interface FormErrors {
  patientId?: string;
  patientName?: string;
}

const PatientLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    patientId: '',
    patientName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // ✅ Validation
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.patientId.trim()) {
      newErrors.patientId = 'Patient ID is required';
    } else if (formData.patientId.trim().length < 3) {
      newErrors.patientId = 'Patient ID must be at least 3 characters';
    }

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Patient name must be at least 2 characters';
    }
    return newErrors;
  };

  // ✅ Handle input
  const handleInputChange = (field: keyof FormData) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // ✅ Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      alert('Login successful!');
          navigate('/dashP');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/registerP');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <User className={styles.headerIcon} size={32} />
          <h1 className={styles.title}>Patient Login</h1>
          <p className={styles.subtitle}>Please sign in to access your patient dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Patient ID */}
          <div className={styles.fieldGroup}>
            <label htmlFor="patientId" className={styles.label}>
              <Hash className={styles.icon} />
              Patient ID
            </label>
            <input
              id="patientId"
              type="text"
              value={formData.patientId}
              onChange={handleInputChange('patientId')}
              placeholder="Enter patient ID"
              className={`${styles.input} ${errors.patientId ? styles.error : ''}`}
              aria-invalid={errors.patientId ? 'true' : 'false'}
              aria-describedby={errors.patientId ? 'patientId-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.patientId && (
              <div id="patientId-error" className={styles.errorMessage} role="alert">
                <AlertCircle className={styles.icon} />
                {errors.patientId}
              </div>
            )}
          </div>

          {/* Patient Name */}
          <div className={styles.fieldGroup}>
            <label htmlFor="patientName" className={styles.label}>
              <User className={styles.icon} />
              Patient Name
            </label>
            <input
              id="patientName"
              type="text"
              value={formData.patientName}
              onChange={handleInputChange('patientName')}
              placeholder="Enter patient name"
              className={`${styles.input} ${errors.patientName ? styles.error : ''}`}
              aria-invalid={errors.patientName ? 'true' : 'false'}
              aria-describedby={errors.patientName ? 'patientName-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.patientName && (
              <div id="patientName-error" className={styles.errorMessage} role="alert">
                <AlertCircle className={styles.icon} />
                {errors.patientName}
              </div>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Not yet registered?{' '}
            <button
              onClick={handleRegisterRedirect}
              className={styles.footerLink}
              disabled={isSubmitting}
            >
              Register now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
