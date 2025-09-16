import React from 'react';
import { User, Bell, Settings } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h1>Admin Panel</h1>
        <p>Blood Bank Management System</p>
      </div>
      
      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <Bell className={styles.actionIcon} />
        </button>
        <button className={styles.actionBtn}>
          <Settings className={styles.actionIcon} />
        </button>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <User className={styles.avatarIcon} />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Admin User</span>
            <span className={styles.profileRole}>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;