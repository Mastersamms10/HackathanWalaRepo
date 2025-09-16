import React from 'react';
import { CheckCircle, XCircle, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Hospitals.module.css';

const Hospitals: React.FC = () => {
  const hospitalsData = [
    {
      id: 1,
      name: 'City General Hospital',
      email: 'admin@citygeneral.com',
      contact: '+1-555-0123',
      city: 'New York',
      state: 'NY',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Memorial Medical Center',
      email: 'contact@memorial.org',
      contact: '+1-555-0124',
      city: 'Los Angeles',
      state: 'CA',
      status: 'Verified',
    },
    {
      id: 3,
      name: 'St. Mary\'s Hospital',
      email: 'info@stmarys.com',
      contact: '+1-555-0125',
      city: 'Chicago',
      state: 'IL',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Regional Healthcare',
      email: 'admin@regional.net',
      contact: '+1-555-0126',
      city: 'Houston',
      state: 'TX',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'University Hospital',
      email: 'contact@university.edu',
      contact: '+1-555-0127',
      city: 'Phoenix',
      state: 'AZ',
      status: 'Verified',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Verified':
        return <CheckCircle className={`${styles.statusIcon} ${styles.success}`} />;
      case 'Pending':
        return <XCircle className={`${styles.statusIcon} ${styles.warning}`} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.hospitals}>
      <div className={styles.header}>
        <h2>Hospitals Management</h2>
        <p>Manage registered hospitals and their verification status</p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Contact Information</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitalsData.map((hospital) => (
              <tr key={hospital.id} className={styles.tableRow}>
                <td>
                  <div className={styles.hospitalName}>
                    <strong>{hospital.name}</strong>
                    <span className={styles.hospitalId}>ID: #{hospital.id}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <Mail className={styles.contactIcon} />
                      <span>{hospital.email}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <Phone className={styles.contactIcon} />
                      <span>{hospital.contact}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.location}>
                    <MapPin className={styles.locationIcon} />
                    <span>{hospital.city}, {hospital.state}</span>
                  </div>
                </td>
                <td>
                  <div className={`${styles.status} ${styles[hospital.status.toLowerCase()]}`}>
                    {getStatusIcon(hospital.status)}
                    <span>{hospital.status}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>View</button>
                    <button className={styles.actionBtn}>Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hospitals;