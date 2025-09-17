import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Building, Lock, User } from 'lucide-react'
import styles from './HospitalLogin.module.css'
import { useNavigate } from 'react-router-dom'

interface HospitalFormData {
  hospitalName: string
  uid: string
}

const HospitalLogin: React.FC = () => {
  const [formData, setFormData] = useState<HospitalFormData>({
    hospitalName: '',
    uid: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

   navigate("/dashH");
    
};

  const handleRegisterRedirect = () => {
    navigate('/registerH');
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <Building className={styles.headerIcon} size={32} />
          <h1 className={styles.title}>Hospital Login</h1>
          <p className={styles.subtitle}>Access your hospital dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Hospital Name *</label>
            <div className={styles.inputWrapper}>
              <Building className={styles.inputIcon} size={18} />
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter hospital name"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Hospital UID *</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={18} />
              <input
                type="text"
                name="uid"
                value={formData.uid}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter hospital UID"
                disabled={isLoading}
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isLoading}
          >
            <Building size={18} />
            <span>{isLoading ? 'Logging in...' : 'Login to Hospital Dashboard'}</span>
          </button>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={handleRegisterRedirect} 
                className={styles.footerLink}
                disabled={isLoading}
              >
                Register your hospital
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HospitalLogin