import React from 'react';
import { CheckCircle, XCircle, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Hospitals.module.css';

const Hospitals: React.FC = () => {
  const [hospital, setHospital] = React.useState<any>(null);

  React.useEffect(() => {
    const stored = localStorage.getItem('hospitalData');
    if (stored) {
      setHospital(JSON.parse(stored));
    }
  }, []);

  if (!hospital) {
    return <div className={styles.hospitals}>No hospital data found. Please login.</div>;
  }

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
        <h2>Hospital Dashboard</h2>
        <p>Welcome, {hospital.name}</p>
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
            <tr className={styles.tableRow}>
              <td>
                <div className={styles.hospitalName}>
                  <strong>{hospital.name}</strong>
                  <span className={styles.hospitalId}>UID: {hospital.uid}</span>
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
                    <span>{hospital.primary_contact}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.location}>
                  <MapPin className={styles.locationIcon} />
                  <span>{hospital.address}</span>
                </div>
              </td>
              <td>
                <div className={`${styles.status} ${styles.active}`}>
                  {getStatusIcon('Active')}
                  <span>Active</span>
                </div>
              </td>
              <td>
                <div className={styles.actions}>
                  <button className={styles.actionBtn}>Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hospitals