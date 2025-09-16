import React from 'react';
import { BarChart3, Building2, Heart, Users, FileText } from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'hospitals', label: 'Hospitals', icon: Building2 },
    { id: 'donors', label: 'Donors', icon: Heart },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'requests', label: 'Blood Requests Logs', icon: FileText },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Heart className={styles.logoIcon} />
        <h2>BloodBank Admin</h2>
      </div>
      
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className={styles.navIcon} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;