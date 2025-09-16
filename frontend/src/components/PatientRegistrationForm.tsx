import React, { useState } from 'react';
import { AlertCircle, User, Mail, Phone, Droplet, MapPin, Map, Hash, Heart, UserCheck } from 'lucide-react';
import styles from './PatientRegistrationForm.module.css';
import { useNavigate } from 'react-router-dom'
interface FormData {
  fullName: string;
  email: string;
  contactNo: string;
  bloodGroup: string;
  rhFactor: string;
  street: string;
  landmark: string;
  areaLocality: string;
  city: string;
  state: string;
  pincode: string;
  medicalCondition: string;
  doctorId: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  contactNo?: string;
  bloodGroup?: string;
  rhFactor?: string;
  street?: string;
  areaLocality?: string;
  city?: string;
  state?: string;
  pincode?: string;
  medicalCondition?: string;
  doctorId?: string;
}

const PatientRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    contactNo: '',
    bloodGroup: '',
    rhFactor: '',
    street: '',
    landmark: '', 
    areaLocality: '',
    city: '',
    state: '',
    pincode: '',
    medicalCondition: '',
    doctorId: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bloodGroups = ['A', 'B', 'AB', 'O'];

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Contact number validation
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNo.trim())) {
      newErrors.contactNo = 'Contact number must be 10 digits';
    }

    // Blood group validation
    if (!formData.bloodGroup) {
      newErrors.bloodGroup = 'Blood group is required';
    }

    // Rh factor validation
    if (!formData.rhFactor) {
      newErrors.rhFactor = 'Rh factor is required';
    }

    // Address validations
    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    if (!formData.areaLocality.trim()) {
      newErrors.areaLocality = 'Area/Locality is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    // Medical condition validation
    if (!formData.medicalCondition.trim()) {
      newErrors.medicalCondition = 'Medical condition information is required';
    }

    // Doctor ID validation
    if (!formData.doctorId.trim()) {
      newErrors.doctorId = 'Doctor ID is required';
    } else if (formData.doctorId.trim().length < 3) {
      newErrors.doctorId = 'Doctor ID must be at least 3 characters';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const value = e.target.value;
  setFormData(prev => ({ ...prev, [field]: value }));


};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Patient registration:', formData);
        alert('Patient registration successful! (This is a demo)');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
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
      <div className={styles.registrationCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Patient Registration</h1>
          <p className={styles.subtitle}>Create your patient account to access healthcare services</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Personal Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Information</h2>
            
            <div className={styles.fieldGroup}>
              <label htmlFor="fullName" className={styles.label}>
                <User className={styles.icon} />
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                placeholder="Enter your full name"
                className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <div id="fullName-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.fullName}
                </div>
              )}
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.label}>
                  <Mail className={styles.icon} />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="your.email@example.com"
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <div id="email-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contactNo" className={styles.label}>
                  <Phone className={styles.icon} />
                  Contact Number
                </label>
                <input
                  id="contactNo"
                  type="tel"
                  value={formData.contactNo}
                  onChange={handleInputChange('contactNo')}
                  placeholder="10-digit mobile number"
                  className={`${styles.input} ${errors.contactNo ? styles.error : ''}`}
                  aria-invalid={errors.contactNo ? 'true' : 'false'}
                  aria-describedby={errors.contactNo ? 'contactNo-error' : undefined}
                  maxLength={10}
                />
                {errors.contactNo && (
                  <div id="contactNo-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.contactNo}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Blood Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Blood Information</h2>
            
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="bloodGroup" className={styles.label}>
                  <Droplet className={styles.icon} />
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange('bloodGroup')}
                  className={`${styles.select} ${errors.bloodGroup ? styles.error : ''}`}
                  aria-invalid={errors.bloodGroup ? 'true' : 'false'}
                  aria-describedby={errors.bloodGroup ? 'bloodGroup-error' : undefined}
                >
                  <option value="">Select blood group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
                {errors.bloodGroup && (
                  <div id="bloodGroup-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.bloodGroup}
                  </div>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <Droplet className={styles.icon} />
                  Rh Factor
                </label>
                <div className={styles.radioGroup}>
                  <label className={`${styles.radioOption} ${formData.rhFactor === 'positive' ? styles.selected : ''}`}>
                    <input
                      type="radio"
                      name="rhFactor"
                      value="positive"
                      checked={formData.rhFactor === 'positive'}
                      onChange={handleInputChange('rhFactor')}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioLabel}>+ve</span>
                  </label>
                  <label className={`${styles.radioOption} ${formData.rhFactor === 'negative' ? styles.selected : ''}`}>
                    <input
                      type="radio"
                      name="rhFactor"
                      value="negative"
                      checked={formData.rhFactor === 'negative'}
                      onChange={handleInputChange('rhFactor')}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioLabel}>-ve</span>
                  </label>
                </div>
                {errors.rhFactor && (
                  <div className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.rhFactor}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Address Information</h2>
            
            <div className={styles.fieldGroup}>
              <label htmlFor="street" className={styles.label}>
                <Map className={styles.icon} />
                Street Address
              </label>
              <textarea
                id="street"
                value={formData.street}
                onChange={handleInputChange('street')}
                placeholder="Enter complete street address"
                className={`${styles.textarea} ${errors.street ? styles.error : ''}`}
                aria-invalid={errors.street ? 'true' : 'false'}
                aria-describedby={errors.street ? 'street-error' : undefined}
                rows={3}
              />
              {errors.street && (
                <div id="street-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.street}
                </div>
              )}
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="landmark" className={styles.label}>
                  <MapPin className={styles.icon} />
                  Landmark
                </label>
                <input
                  id="landmark"
                  type="text"
                  value={formData.landmark}
                  onChange={handleInputChange('landmark')}
                  placeholder="Nearby landmark (optional)"
                  className={styles.input}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="areaLocality" className={styles.label}>
                  <MapPin className={styles.icon} />
                  Area/Locality
                </label>
                <input
                  id="areaLocality"
                  type="text"
                  value={formData.areaLocality}
                  onChange={handleInputChange('areaLocality')}
                  placeholder="Area or locality"
                  className={`${styles.input} ${errors.areaLocality ? styles.error : ''}`}
                  aria-invalid={errors.areaLocality ? 'true' : 'false'}
                  aria-describedby={errors.areaLocality ? 'areaLocality-error' : undefined}
                />
                {errors.areaLocality && (
                  <div id="areaLocality-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.areaLocality}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.fieldRowThree}>
              <div className={styles.fieldGroup}>
                <label htmlFor="city" className={styles.label}>
                  <MapPin className={styles.icon} />
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange('city')}
                  placeholder="City"
                  className={`${styles.input} ${errors.city ? styles.error : ''}`}
                  aria-invalid={errors.city ? 'true' : 'false'}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                />
                {errors.city && (
                  <div id="city-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.city}
                  </div>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="state" className={styles.label}>
                  <MapPin className={styles.icon} />
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange('state')}
                  placeholder="State"
                  className={`${styles.input} ${errors.state ? styles.error : ''}`}
                  aria-invalid={errors.state ? 'true' : 'false'}
                  aria-describedby={errors.state ? 'state-error' : undefined}
                />
                {errors.state && (
                  <div id="state-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.state}
                  </div>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="pincode" className={styles.label}>
                  <Hash className={styles.icon} />
                  Pincode
                </label>
                <input
                  id="pincode"
                  type="text"
                  value={formData.pincode}
                  onChange={handleInputChange('pincode')}
                  placeholder="6-digit pincode"
                  className={`${styles.input} ${errors.pincode ? styles.error : ''}`}
                  aria-invalid={errors.pincode ? 'true' : 'false'}
                  aria-describedby={errors.pincode ? 'pincode-error' : undefined}
                  maxLength={6}
                />
                {errors.pincode && (
                  <div id="pincode-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.pincode}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Medical Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Medical Information</h2>
            
            <div className={styles.fieldGroup}>
              <label htmlFor="medicalCondition" className={styles.label}>
                <Heart className={styles.icon} />
                Medical Condition
              </label>
              <textarea
                id="medicalCondition"
                value={formData.medicalCondition}
                onChange={handleInputChange('medicalCondition')}
                placeholder="Please describe any medical conditions, allergies, medications, or health concerns"
                className={`${styles.textarea} ${errors.medicalCondition ? styles.error : ''}`}
                aria-invalid={errors.medicalCondition ? 'true' : 'false'}
                aria-describedby={errors.medicalCondition ? 'medicalCondition-error' : undefined}
                rows={4}
              />
              {errors.medicalCondition && (
                <div id="medicalCondition-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.medicalCondition}
                </div>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="doctorId" className={styles.label}>
                <UserCheck className={styles.icon} />
                Doctor ID
              </label>
              <input
                id="doctorId"
                type="text"
                value={formData.doctorId}
                onChange={handleInputChange('doctorId')}
                placeholder="Enter your assigned doctor's ID"
                className={`${styles.input} ${errors.doctorId ? styles.error : ''}`}
                aria-invalid={errors.doctorId ? 'true' : 'false'}
                aria-describedby={errors.doctorId ? 'doctorId-error' : undefined}
              />
              {errors.doctorId && (
                <div id="doctorId-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.doctorId}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            onClick={re3}
            disabled={isSubmitting}
            className={styles.submitButton}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Registering Patient...' : 'Register Patient'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientRegistrationForm;