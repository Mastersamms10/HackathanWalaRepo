import React from 'react';
import { Building2, Heart, Users, FileText, TrendingUp } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Hospitals',
      value: '248',
      change: '+12%',
      icon: Building2,
      color: 'blue',
    },
    {
      title: 'Total Donors',
      value: '15,420',
      change: '+8.2%',
      icon: Heart,
      color: 'red',
    },
    {
      title: 'Total Patients',
      value: '3,842',
      change: '+3.1%',
      icon: Users,
      color: 'green',
    },
    {
      title: 'Blood Requests',
      value: '1,286',
      change: '+15.3%',
      icon: FileText,
      color: 'purple',
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h2>Dashboard Overview</h2>
        <p>Monitor your blood bank management system performance</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
              <div className={styles.statIcon}>
                <Icon className={styles.icon} />
              </div>
              <div className={styles.statContent}>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statTitle}>{stat.title}</p>
                <div className={styles.statChange}>
                  <TrendingUp className={styles.trendIcon} />
                  <span>{stat.change} from last month</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.recentActivity}>
        <h3>Recent Activity</h3>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <Building2 className={styles.icon} />
            </div>
            <div className={styles.activityContent}>
              <p><strong>City Hospital</strong> registered as a new partner</p>
              <span className={styles.activityTime}>2 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <Heart className={styles.icon} />
            </div>
            <div className={styles.activityContent}>
              <p><strong>John Doe</strong> completed blood donation</p>
              <span className={styles.activityTime}>4 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <FileText className={styles.icon} />
            </div>
            <div className={styles.activityContent}>
              <p>Emergency blood request for <strong>O+ blood type</strong></p>
              <span className={styles.activityTime}>6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;