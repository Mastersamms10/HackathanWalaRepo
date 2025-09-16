import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Heart, User } from 'lucide-react'
import styles from './DonorLogin.module.css'
import { useNavigate } from 'react-router-dom'
interface DonorFormData {
  donorName: string
  donorId: string
}

const DonorLogin: React.FC = () => {
  const [formData, setFormData] = useState<DonorFormData>({
    donorName: '',
    donorId: '',
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
    alert(`Donor Login Attempt:\n${JSON.stringify(formData, null, 2)}`)
  }
const navigate = useNavigate();
const re= ()=>{
navigate('/registerD');
}
const re3= ()=>{
navigate('/dashD');
}
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <Heart className={styles.headerIcon} size={32} />
          <h1 className={styles.title}>Donor Login</h1>
          <p className={styles.subtitle}>Access your donor dashboard</p>
        </div>

        <form  className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Donor Name *</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={18} />
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter donor name"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Donor ID *</label>
            <div className={styles.inputWrapper}>
              <Heart className={styles.inputIcon} size={18} />
              <input
                type="text"
                name="donorId"
                value={formData.donorId}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter donor ID"
              />
            </div>
          </div>

          <button onClick={re3} className={styles.loginButton}>
            <Heart size={18} />
            <span>Login to Donor Dashboard</span>
          </button>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{' '}
              <button onClick={re} className={styles.footerLink}>Register as donor</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonorLogin
