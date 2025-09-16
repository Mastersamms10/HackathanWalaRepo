import React, { useState } from 'react';
import { Upload, User, Building, Heart } from 'lucide-react';
import styles from './Registration.module.css';

type FormSubmitHandler = (formType: string, e: React.FormEvent<HTMLFormElement>) => void;
const Registration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hospital' | 'donor' | 'patient'>('hospital');

  const tabs = [
    { id: 'hospital' as const, label: 'Hospital', icon: Building },
    { id: 'donor' as const, label: 'Donor', icon: Heart },
    { id: 'patient' as const, label: 'Patient', icon: User }
  ];

  const handleSubmit: FormSubmitHandler = (formType, e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    alert(`${formType} Registration Submitted!\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.registrationCard}>
        <h1 className={styles.title}>Registration Portal</h1>

        {/* Tabs */}
        <div className={styles.tabContainer}>
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`${styles.tab} ${activeTab === id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Forms */}
        <div className={styles.formContainer}>
          {activeTab === 'hospital' && <HospitalForm onSubmit={handleSubmit} />}
          {activeTab === 'donor' && <DonorForm onSubmit={handleSubmit} />}
          {activeTab === 'patient' && <PatientForm onSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  );
};

interface FormProps {
  onSubmit: FormSubmitHandler;
}

const HospitalForm: React.FC<FormProps> = ({ onSubmit }) => (
  <form onSubmit={(e) => onSubmit('Hospital', e)} className={styles.form}>
    <h2 className={styles.formTitle}>Hospital Registration</h2>

    <div className={styles.field}>
      <label className={styles.label}>Hospital Name *</label>
      <input
        type="text"
        name="hospitalName"
        className={styles.input}
        required
        placeholder="Enter hospital name"
      />
    </div>

    <div className={styles.addressSection}>
      <h3 className={styles.sectionTitle}>Address Information</h3>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label className={styles.label}>Street *</label>
          <input
            type="text"
            name="street"
            className={styles.input}
            required
            placeholder="Street address"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Landmark</label>
          <input
            type="text"
            name="landmark"
            className={styles.input}
            placeholder="Nearby landmark"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Area/Locality *</label>
          <input
            type="text"
            name="area"
            className={styles.input}
            required
            placeholder="Area or locality"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>City *</label>
          <input
            type="text"
            name="city"
            className={styles.input}
            required
            placeholder="City"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>State *</label>
          <input
            type="text"
            name="state"
            className={styles.input}
            required
            placeholder="State"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Zip/Postal Code *</label>
          <input
            type="text"
            name="zipCode"
            className={styles.input}
            required
            placeholder="ZIP code"
          />
        </div>
      </div>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Hospital Email *</label>
      <input
        type="email"
        name="email"
        className={styles.input}
        required
        placeholder="hospital@example.com"
      />
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Contact Number *</label>
      <input
        type="tel"
        name="contactNumber"
        className={styles.input}
        required
        placeholder="+1 (555) 123-4567"
      />
    </div>

    <button type="submit" className={styles.submitButton}>
      Register Hospital
    </button>
  </form>
);

const DonorForm: React.FC<FormProps> = ({ onSubmit }) => (
  <form onSubmit={(e) => onSubmit('Donor', e)} className={styles.form}>
    <h2 className={styles.formTitle}>Donor Registration</h2>

    <div className={styles.fieldGrid}>
      <div className={styles.field}>
        <label className={styles.label}>Full Name *</label>
        <input
          type="text"
          name="fullName"
          className={styles.input}
          required
          placeholder="Enter full name"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email *</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          required
          placeholder="donor@example.com"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Contact Number *</label>
        <input
          type="tel"
          name="contactNumber"
          className={styles.input}
          required
          placeholder="+1 (555) 123-4567"
        />
      </div>
    </div>

    <div className={styles.fieldGrid}>
      <div className={styles.field}>
        <label className={styles.label}>Blood Group *</label>
        <select name="bloodGroup" className={styles.input} required>
          <option value="">Select blood group</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="AB">AB</option>
          <option value="O">O</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Rhesus Factor *</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name="rhesusFactor" value="+" required />
            <span>Positive (+)</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="rhesusFactor" value="-" required />
            <span>Negative (-)</span>
          </label>
        </div>
      </div>
    </div>

    <div className={styles.addressSection}>
      <h3 className={styles.sectionTitle}>Address Information</h3>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label className={styles.label}>Street *</label>
          <input
            type="text"
            name="street"
            className={styles.input}
            required
            placeholder="Street address"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Landmark</label>
          <input
            type="text"
            name="landmark"
            className={styles.input}
            placeholder="Nearby landmark"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Area/Locality *</label>
          <input
            type="text"
            name="area"
            className={styles.input}
            required
            placeholder="Area or locality"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>City *</label>
          <input
            type="text"
            name="city"
            className={styles.input}
            required
            placeholder="City"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>State *</label>
          <input
            type="text"
            name="state"
            className={styles.input}
            required
            placeholder="State"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Zip/Postal Code *</label>
          <input
            type="text"
            name="zipCode"
            className={styles.input}
            required
            placeholder="ZIP code"
          />
        </div>
      </div>
    </div>

    <div className={styles.fieldGrid}>
      <div className={styles.field}>
        <label className={styles.label}>Last Donation Date</label>
        <input type="date" name="lastDonationDate" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Availability Status *</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name="availability" value="available" required />
            <span>Available</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="availability" value="unavailable" required />
            <span>Unavailable</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="availability" value="on-leave" required />
            <span>On Leave</span>
          </label>
        </div>
      </div>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Health Information</label>
      <textarea
        name="healthInfo"
        className={styles.textarea}
        rows={4}
        placeholder="Any relevant health information or medical conditions"
      ></textarea>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Upload Documents</label>
      <div className={styles.fileUpload}>
        <Upload size={20} />
        <input type="file" name="documents" multiple className={styles.fileInput} />
        <span>Choose files or drag and drop</span>
      </div>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Accept SOS Requests *</label>
      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input type="radio" name="acceptSOS" value="yes" required />
          <span>Yes</span>
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="acceptSOS" value="no" required />
          <span>No</span>
        </label>
      </div>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Preferences</label>
      <textarea
        name="preferences"
        className={styles.textarea}
        rows={3}
        placeholder="Any specific preferences or requirements"
      ></textarea>
    </div>

    <button type="submit" className={styles.submitButton}>
      Register as Donor
    </button>
  </form>
);

const PatientForm: React.FC<FormProps> = ({ onSubmit }) => (
  <form onSubmit={(e) => onSubmit('Patient', e)} className={styles.form}>
    <h2 className={styles.formTitle}>Patient Registration</h2>

    <div className={styles.fieldGrid}>
      <div className={styles.field}>
        <label className={styles.label}>Patient Name *</label>
        <input
          type="text"
          name="patientName"
          className={styles.input}
          required
          placeholder="Enter patient name"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email *</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          required
          placeholder="patient@example.com"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Contact Number *</label>
        <input
          type="tel"
          name="contactNumber"
          className={styles.input}
          required
          placeholder="+1 (555) 123-4567"
        />
      </div>
    </div>

    <div className={styles.fieldGrid}>
      <div className={styles.field}>
        <label className={styles.label}>Blood Group *</label>
        <select name="bloodGroup" className={styles.input} required>
          <option value="">Select blood group</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="AB">AB</option>
          <option value="O">O</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Rhesus Factor *</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name="rhesusFactor" value="+" required />
            <span>Positive (+)</span>
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="rhesusFactor" value="-" required />
            <span>Negative (-)</span>
          </label>
        </div>
      </div>
    </div>

    <div className={styles.addressSection}>
      <h3 className={styles.sectionTitle}>Address Information</h3>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label className={styles.label}>Street *</label>
          <input
            type="text"
            name="street"
            className={styles.input}
            required
            placeholder="Street address"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Landmark</label>
          <input
            type="text"
            name="landmark"
            className={styles.input}
            placeholder="Nearby landmark"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Area/Locality *</label>
          <input
            type="text"
            name="area"
            className={styles.input}
            required
            placeholder="Area or locality"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>City *</label>
          <input
            type="text"
            name="city"
            className={styles.input}
            required
            placeholder="City"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>State *</label>
          <input
            type="text"
            name="state"
            className={styles.input}
            required
            placeholder="State"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Zip/Postal Code *</label>
          <input
            type="text"
            name="zipCode"
            className={styles.input}
            required
            placeholder="ZIP code"
          />
        </div>
      </div>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Medical Condition *</label>
      <textarea
        name="medicalCondition"
        className={styles.textarea}
        rows={4}
        required
        placeholder="Describe the medical condition requiring blood transfusion"
      ></textarea>
    </div>

    <div className={styles.field}>
      <label className={styles.label}>Doctor ID</label>
      <input
        type="text"
        name="doctorId"
        className={styles.input}
        placeholder="Enter doctor's ID or license number"
      />
    </div>

    <button type="submit" className={styles.submitButton}>
      Register as Patient
    </button>
  </form>
);

export default Registration;
