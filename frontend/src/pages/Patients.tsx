import React from 'react';
import { User, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import styles from './Patients.module.css';

const Patients: React.FC = () => {
  const patientsData = [
    {
      id: 1,
      patientName: 'Alice Cooper',
      email: 'alice.cooper@email.com',
      phone: '+1-555-0201',
      bloodGroup: 'A+',
      quantityRequired: '2 Units',
      location: 'New York, NY',
      medicalCondition: 'Surgery Recovery',
      urgency: 'High',
    },
    {
      id: 2,
      patientName: 'David Martinez',
      email: 'd.martinez@email.com',
      phone: '+1-555-0202',
      bloodGroup: 'O-',
      quantityRequired: '3 Units',
      location: 'Los Angeles, CA',
      medicalCondition: 'Accident Trauma',
      urgency: 'Critical',
    },
    {
      id: 3,
      patientName: 'Lisa Wang',
      email: 'lisa.wang@email.com',
      phone: '+1-555-0203',
      bloodGroup: 'B-',
      quantityRequired: '1 Unit',
      location: 'Chicago, IL',
      medicalCondition: 'Anemia Treatment',
      urgency: 'Medium',
    },
    {
      id: 4,
      patientName: 'James Thompson',
      email: 'j.thompson@email.com',
      phone: '+1-555-0204',
      bloodGroup: 'AB+',
      quantityRequired: '4 Units',
      location: 'Houston, TX',
      medicalCondition: 'Cancer Treatment',
      urgency: 'High',
    },
    {
      id: 5,
      patientName: 'Maria Garcia',
      email: 'm.garcia@email.com',
      phone: '+1-555-0205',
      bloodGroup: 'O+',
      quantityRequired: '2 Units',
      location: 'Phoenix, AZ',
      medicalCondition: 'Childbirth Complications',
      urgency: 'Critical',
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'critical';
      case 'High':
        return 'high';
      case 'Medium':
        return 'medium';
      case 'Low':
        return 'low';
      default:
        return 'medium';
    }
  };

  const getBloodGroupColor = (bloodGroup: string) => {
    const colors: { [key: string]: string } = {
      'O+': 'red',
      'O-': 'red',
      'A+': 'blue',
      'A-': 'blue',
      'B+': 'green',
      'B-': 'green',
      'AB+': 'purple',
      'AB-': 'purple',
    };
    return colors[bloodGroup] || 'gray';
  };

  return (
    <div className={styles.patients}>
      <div className={styles.header}>
        <h2>Patients Management</h2>
        <p>Monitor patients requiring blood transfusions and their medical needs</p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Patient Information</th>
              <th>Contact Details</th>
              <th>Blood Requirements</th>
              <th>Location</th>
              <th>Medical Condition</th>
              <th>Urgency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patient) => (
              <tr key={patient.id} className={styles.tableRow}>
                <td>
                  <div className={styles.patientInfo}>
                    <div className={styles.patientAvatar}>
                      <User className={styles.avatarIcon} />
                    </div>
                    <div>
                      <strong className={styles.patientName}>{patient.patientName}</strong>
                      <span className={styles.patientId}>Patient ID: #{patient.id}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <Mail className={styles.contactIcon} />
                      <span>{patient.email}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <Phone className={styles.contactIcon} />
                      <span>{patient.phone}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.bloodRequirement}>
                    <div className={`${styles.bloodGroup} ${styles[getBloodGroupColor(patient.bloodGroup)]}`}>
                      <span className={styles.bloodType}>{patient.bloodGroup}</span>
                    </div>
                    <div className={styles.quantity}>
                      <span>{patient.quantityRequired}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.location}>
                    <MapPin className={styles.locationIcon} />
                    <span>{patient.location}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.medicalCondition}>
                    <AlertCircle className={styles.conditionIcon} />
                    <span>{patient.medicalCondition}</span>
                  </div>
                </td>
                <td>
                  <div className={`${styles.urgency} ${styles[getUrgencyColor(patient.urgency)]}`}>
                    <span>{patient.urgency}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>Contact</button>
                    <button className={styles.actionBtn}>Fulfill</button>
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

export default Patients;