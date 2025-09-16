import React from 'react';
import { Heart, Phone, Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';
import styles from './Donors.module.css';

const Donors: React.FC = () => {
  const donorsData = [
    {
      id: 1,
      fullName: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1-555-0101',
      bloodGroup: 'O+',
      lastDonation: '2024-01-15',
      availability: 'Available',
      acceptSOS: true,
    },
    {
      id: 2,
      fullName: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1-555-0102',
      bloodGroup: 'A-',
      lastDonation: '2024-02-20',
      availability: 'Available',
      acceptSOS: false,
    },
    {
      id: 3,
      fullName: 'Michael Brown',
      email: 'm.brown@email.com',
      phone: '+1-555-0103',
      bloodGroup: 'B+',
      lastDonation: '2024-01-08',
      availability: 'Unavailable',
      acceptSOS: true,
    },
    {
      id: 4,
      fullName: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1-555-0104',
      bloodGroup: 'AB-',
      lastDonation: '2024-03-05',
      availability: 'Available',
      acceptSOS: true,
    },
    {
      id: 5,
      fullName: 'Robert Wilson',
      email: 'r.wilson@email.com',
      phone: '+1-555-0105',
      bloodGroup: 'O-',
      lastDonation: '2024-01-28',
      availability: 'Available',
      acceptSOS: false,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
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
    <div className={styles.donors}>
      <div className={styles.header}>
        <h2>Donors Management</h2>
        <p>Manage registered blood donors and their availability</p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Donor Information</th>
              <th>Contact Details</th>
              <th>Blood Group</th>
              <th>Last Donation</th>
              <th>Status</th>
              <th>Emergency SOS</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donorsData.map((donor) => (
              <tr key={donor.id} className={styles.tableRow}>
                <td>
                  <div className={styles.donorInfo}>
                    <div className={styles.donorAvatar}>
                      <Heart className={styles.avatarIcon} />
                    </div>
                    <div>
                      <strong className={styles.donorName}>{donor.fullName}</strong>
                      <span className={styles.donorId}>ID: #{donor.id}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <Mail className={styles.contactIcon} />
                      <span>{donor.email}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <Phone className={styles.contactIcon} />
                      <span>{donor.phone}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`${styles.bloodGroup} ${styles[getBloodGroupColor(donor.bloodGroup)]}`}>
                    <span className={styles.bloodType}>{donor.bloodGroup}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.lastDonation}>
                    <Calendar className={styles.calendarIcon} />
                    <span>{formatDate(donor.lastDonation)}</span>
                  </div>
                </td>
                <td>
                  <div className={`${styles.availability} ${styles[donor.availability.toLowerCase()]}`}>
                    {donor.availability === 'Available' ? (
                      <CheckCircle className={styles.availabilityIcon} />
                    ) : (
                      <XCircle className={styles.availabilityIcon} />
                    )}
                    <span>{donor.availability}</span>
                  </div>
                </td>
                <td>
                  <div className={`${styles.sosStatus} ${donor.acceptSOS ? styles.yes : styles.no}`}>
                    <span>{donor.acceptSOS ? 'Yes' : 'No'}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>Contact</button>
                    <button className={styles.actionBtn}>View</button>
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

export default Donors;