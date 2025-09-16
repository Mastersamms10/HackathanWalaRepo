import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Building, Lock, User } from 'lucide-react'
import styles from './HospitalLogin.module.css'
import { useNavigate } from 'react-router-dom'

interface HospitalFormData {
  hospitalName: string
  uid: string
  password: string
}

const HospitalLogin: React.FC = () => {
  const [formData, setFormData] = useState<HospitalFormData>({
    hospitalName: '',
    uid: '',
    password: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Hospital Login Attempt:\n${JSON.stringify(formData, null, 2)}`)
  }
const navigate = useNavigate();
const re= ()=>{
navigate('/registerH');
}
const re3= ()=>{
navigate('/dashH');
}
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <Building className={styles.headerIcon} size={32} />
          <h1 className={styles.title}>Hospital Login</h1>
          <p className={styles.subtitle}>Access your hospital dashboard</p>
        </div>

        <form className={styles.form}>
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
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Password *</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter password"
              />
            </div>
          </div>

          <button onClick={re3} className={styles.loginButton}>
            <Building size={18} />
            <span>Login to Hospital Dashboard</span>
          </button>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{' '}
              <button onClick={re} className={styles.footerLink}>
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
