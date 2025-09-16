import React, { useState } from 'react';
import { AlertCircle, User, Mail, Phone, Droplet, MapPin, Map, Calendar, FileText, Heart, Settings } from 'lucide-react';
import styles from './DonorRegistrationForm.module.css';
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
  lastDonationDate: string;
  availabilityStatus: string;
  healthInformation: string;
  document: File | null;
  acceptSosRequest: string;
  preferences: string;
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
  lastDonationDate?: string;
  availabilityStatus?: string;
  healthInformation?: string;
  acceptSosRequest?: string;
}

const DonorRegistrationForm: React.FC = () => {
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
    lastDonationDate: '',
    availabilityStatus: '',
    healthInformation: '',
    document: null,
    acceptSosRequest: '',
    preferences: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bloodGroups = ['A', 'B', 'AB', 'O'];
  const availabilityOptions = ['Available', 'Not Available', 'Available on Emergency'];

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

    // Availability status validation
    if (!formData.availabilityStatus) {
      newErrors.availabilityStatus = 'Availability status is required';
    }

    // Health information validation
    if (!formData.healthInformation.trim()) {
      newErrors.healthInformation = 'Health information is required';
    }

    // SOS request validation
    if (!formData.acceptSosRequest) {
      newErrors.acceptSosRequest = 'Please specify if you accept SOS requests';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, document: file }));
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
        console.log('Donor registration:', formData);
        alert('Donor registration successful! (This is a demo)');
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
navigate('/registerD');
}
const re3= ()=>{
navigate('/dashD');
}
  return (
    <div className={styles.container}>
      <div className={styles.registrationCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Blood Donor Registration</h1>
          <p className={styles.subtitle}>Join our life-saving community of blood donors</p>
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
                  <MapPin className={styles.icon} />
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

          {/* Donation Information Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Donation Information</h2>
            
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="lastDonationDate" className={styles.label}>
                  <Calendar className={styles.icon} />
                  Last Donation Date
                </label>
                <input
                  id="lastDonationDate"
                  type="date"
                  value={formData.lastDonationDate}
                  onChange={handleInputChange('lastDonationDate')}
                  className={styles.input}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="availabilityStatus" className={styles.label}>
                  <Heart className={styles.icon} />
                  Availability Status
                </label>
                <select
                  id="availabilityStatus"
                  value={formData.availabilityStatus}
                  onChange={handleInputChange('availabilityStatus')}
                  className={`${styles.select} ${errors.availabilityStatus ? styles.error : ''}`}
                  aria-invalid={errors.availabilityStatus ? 'true' : 'false'}
                  aria-describedby={errors.availabilityStatus ? 'availabilityStatus-error' : undefined}
                >
                  <option value="">Select availability</option>
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.availabilityStatus && (
                  <div id="availabilityStatus-error" className={styles.errorMessage} role="alert">
                    <AlertCircle className={styles.icon} />
                    {errors.availabilityStatus}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Health & Documents Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Health & Documents</h2>
            
            <div className={styles.fieldGroup}>
              <label htmlFor="healthInformation" className={styles.label}>
                <Heart className={styles.icon} />
                Health Information
              </label>
              <textarea
                id="healthInformation"
                value={formData.healthInformation}
                onChange={handleInputChange('healthInformation')}
                placeholder="Please provide any relevant health information, medical conditions, medications, etc."
                className={`${styles.textarea} ${errors.healthInformation ? styles.error : ''}`}
                aria-invalid={errors.healthInformation ? 'true' : 'false'}
                aria-describedby={errors.healthInformation ? 'healthInformation-error' : undefined}
                rows={4}
              />
              {errors.healthInformation && (
                <div id="healthInformation-error" className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.healthInformation}
                </div>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="document" className={styles.label}>
                <FileText className={styles.icon} />
                Upload Document (Optional)
              </label>
              <input
                id="document"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className={styles.fileInput}
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Preferences</h2>
            
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <Heart className={styles.icon} />
                Accept SOS Requests
              </label>
              <div className={styles.radioGroup}>
                <label className={`${styles.radioOption} ${formData.acceptSosRequest === 'yes' ? styles.selected : ''}`}>
                  <input
                    type="radio"
                    name="acceptSosRequest"
                    value="yes"
                    checked={formData.acceptSosRequest === 'yes'}
                    onChange={handleInputChange('acceptSosRequest')}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>Yes</span>
                </label>
                <label className={`${styles.radioOption} ${formData.acceptSosRequest === 'no' ? styles.selected : ''}`}>
                  <input
                    type="radio"
                    name="acceptSosRequest"
                    value="no"
                    checked={formData.acceptSosRequest === 'no'}
                    onChange={handleInputChange('acceptSosRequest')}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>No</span>
                </label>
              </div>
              {errors.acceptSosRequest && (
                <div className={styles.errorMessage} role="alert">
                  <AlertCircle className={styles.icon} />
                  {errors.acceptSosRequest}
                </div>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="preferences" className={styles.label}>
                <Settings className={styles.icon} />
                Additional Preferences (Optional)
              </label>
              <textarea
                id="preferences"
                value={formData.preferences}
                onChange={handleInputChange('preferences')}
                placeholder="Any specific preferences or requirements (e.g., preferred donation times, locations, etc.)"
                className={styles.textarea}
                rows={3}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={re3}
            disabled={isSubmitting}
            className={styles.submitButton}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Registering Donor...' : 'Register as Donor'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;