import React from 'react';
import { FileText, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import styles from './RequestsLogs.module.css';

const RequestsLogs: React.FC = () => {
  const requestsData = [
    {
      id: 'REQ001',
      requestDate: '2024-01-15',
      requestedBy: 'City General Hospital',
      requesterType: 'Hospital',
      bloodGroup: 'O+',
      quantity: '3 Units',
      status: 'Fulfilled',
      priority: 'High',
      fulfillmentDate: '2024-01-15',
    },
    {
      id: 'REQ002',
      requestDate: '2024-01-16',
      requestedBy: 'Alice Cooper',
      requesterType: 'Patient',
      bloodGroup: 'A-',
      quantity: '2 Units',
      status: 'Pending',
      priority: 'Critical',
      fulfillmentDate: null,
    },
    {
      id: 'REQ003',
      requestDate: '2024-01-17',
      requestedBy: 'Memorial Medical Center',
      requesterType: 'Hospital',
      bloodGroup: 'B+',
      quantity: '1 Unit',
      status: 'Approved',
      priority: 'Medium',
      fulfillmentDate: null,
    },
    {
      id: 'REQ004',
      requestDate: '2024-01-18',
      requestedBy: 'David Martinez',
      requesterType: 'Patient',
      bloodGroup: 'O-',
      quantity: '4 Units',
      status: 'Rejected',
      priority: 'High',
      fulfillmentDate: null,
    },
    {
      id: 'REQ005',
      requestDate: '2024-01-19',
      requestedBy: 'St. Mary\'s Hospital',
      requesterType: 'Hospital',
      bloodGroup: 'AB+',
      quantity: '2 Units',
      status: 'Fulfilled',
      priority: 'Medium',
      fulfillmentDate: '2024-01-19',
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return <CheckCircle className={`${styles.statusIcon} ${styles.success}`} />;
      case 'Approved':
        return <Clock className={`${styles.statusIcon} ${styles.warning}`} />;
      case 'Pending':
        return <AlertCircle className={`${styles.statusIcon} ${styles.pending}`} />;
      case 'Rejected':
        return <XCircle className={`${styles.statusIcon} ${styles.error}`} />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
    <div className={styles.requestsLogs}>
      <div className={styles.header}>
        <h2>Blood Requests Logs</h2>
        <p>Track all blood requests from hospitals and patients</p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Request Details</th>
              <th>Requested By</th>
              <th>Blood Requirements</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Fulfillment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requestsData.map((request) => (
              <tr key={request.id} className={styles.tableRow}>
                <td>
                  <div className={styles.requestInfo}>
                    <div className={styles.requestIcon}>
                      <FileText className={styles.icon} />
                    </div>
                    <div>
                      <strong className={styles.requestId}>{request.id}</strong>
                      <div className={styles.requestDate}>
                        <Calendar className={styles.dateIcon} />
                        <span>{formatDate(request.requestDate)}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.requesterInfo}>
                    <strong className={styles.requesterName}>{request.requestedBy}</strong>
                    <span className={`${styles.requesterType} ${styles[request.requesterType.toLowerCase()]}`}>
                      {request.requesterType}
                    </span>
                  </div>
                </td>
                <td>
                  <div className={styles.bloodRequirement}>
                    <div className={`${styles.bloodGroup} ${styles[getBloodGroupColor(request.bloodGroup)]}`}>
                      <span className={styles.bloodType}>{request.bloodGroup}</span>
                    </div>
                    <div className={styles.quantity}>
                      <span>{request.quantity}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`${styles.priority} ${styles[getPriorityColor(request.priority)]}`}>
                    <span>{request.priority}</span>
                  </div>
                </td>
                <td>
                  <div className={`${styles.status} ${styles[request.status.toLowerCase()]}`}>
                    {getStatusIcon(request.status)}
                    <span>{request.status}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.fulfillment}>
                    {request.fulfillmentDate ? (
                      <>
                        <CheckCircle className={styles.fulfillmentIcon} />
                        <span>{formatDate(request.fulfillmentDate)}</span>
                      </>
                    ) : (
                      <span className={styles.notFulfilled}>Not fulfilled</span>
                    )}
                  </div>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>View</button>
                    <button className={styles.actionBtn}>Update</button>
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

export default RequestsLogs;