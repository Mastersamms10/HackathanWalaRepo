import React, { useState } from 'react';
import { AlertCircle, Building2, Hash, MapPin, Mail, Phone, Map } from 'lucide-react';
import styles from './HospitalRegistrationForm.module.css';
import { useNavigate } from 'react-router-dom'
interface FormData {
  hospitalName: string;
  hospitalId: string;
  street: string;
  landmark: string;
  areaLocality: string;
  city: string;
  state: string;
  pincode: string;
  email: string;
  contactNo: string;
}

interface FormErrors {
  hospitalName?: string;
  hospitalId?: string;
  street?: string;
  landmark?: string;
  areaLocality?: string;
  city?: string;
  state?: string;
  pincode?: string;
  email?: string;
  contactNo?: string;
}

const HospitalRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hospitalName: '',
    hospitalId: '',
    street: '',
    landmark: '',
    areaLocality: '',
    city: '',
    state: '',
    pincode: '',
    email: '',
    contactNo: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Hospital Name validation
    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = 'Hospital name is required';
    } else if (formData.hospitalName.trim().length < 3) {
      newErrors.hospitalName = 'Hospital name must be at least 3 characters';
    }

    // Hospital ID validation
    if (!formData.hospitalId.trim()) {
      newErrors.hospitalId = 'Hospital ID is required';
    } else if (formData.hospitalId.trim().length < 3) {
      newErrors.hospitalId = 'Hospital ID must be at least 3 characters';
    }

    // Street validation
    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    // Area/Locality validation
    if (!formData.areaLocality.trim()) {
      newErrors.areaLocality = 'Area/Locality is required';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // State validation
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    // Pincode validation
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Pincode must be 6 digits';
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

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
 navigate("/dashH");
   
  }
};
  return (
    <div className={styles.container}>
      <div className={styles.registrationCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Hospital Registration</h1>
          <p className={styles.subtitle}>Register your hospital to join our healthcare network</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Hospital Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Hospital Information</h2>
            
            <div className={styles.fieldGroup}>
              <label htmlFor="hospitalName" className={styles.label}>
                <Building2 className={styles.icon} />
                Hospital Name
              </label>
              <input
                id="hospitalName"
                type="text"
                value={formData.hospitalName}
                onChange={handleInputChange('hospitalName')}
                placeholder="Enter hospital name"
                className={`${styles.input} ${errors.hospitalName ? styles.error : ''}`}
                aria-invalid={errors.hospitalName ? 'true' : 'false'}
                aria-describedby={errors.hospitalName ? 'hospitalName-error' : undefined}
              />
              {errors.hospitalName && (
                <div id="hospitalName-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.hospitalName}
                </div>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="hospitalId" className={styles.label}>
                <Hash className={styles.icon} />
                Hospital ID
              </label>
              <input
                id="hospitalId"
                type="text"
                value={formData.hospitalId}
                onChange={handleInputChange('hospitalId')}
                placeholder="Enter unique hospital ID"
                className={`${styles.input} ${errors.hospitalId ? styles.error : ''}`}
                aria-invalid={errors.hospitalId ? 'true' : 'false'}
                aria-describedby={errors.hospitalId ? 'hospitalId-error' : undefined}
              />
              {errors.hospitalId && (
                <div id="hospitalId-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.hospitalId}
                </div>
              )}
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
                  className={`${styles.input} ${errors.landmark ? styles.error : ''}`}
                  aria-invalid={errors.landmark ? 'true' : 'false'}
                  aria-describedby={errors.landmark ? 'landmark-error' : undefined}
                />
                {errors.landmark && (
                  <div id="landmark-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.landmark}
                  </div>
                )}
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

          {/* Contact Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            
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
                  placeholder="hospital@example.com"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Registering Hospital...' : 'Register Hospital'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalRegistrationForm;