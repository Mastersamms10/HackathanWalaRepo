import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import BloodBucket from './BloodBucket'
import SOSButton from './SOSButton'
import SOSModal from './SOSModal'

type BloodStatus = 'sufficient' | 'moderate' | 'critical'

interface BloodUnit {
  bloodGroup: string
  units: number
  maxUnits: number
  status: BloodStatus
}

const Hdash: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard')
  const [isSOSModalOpen, setIsSOSModalOpen] = useState<boolean>(false)

  const bloodData: BloodUnit[] = [
    { bloodGroup: 'A+', units: 15, maxUnits: 200, status: 'critical' },
    { bloodGroup: 'A-', units: 67, maxUnits: 150, status: 'moderate' },
    { bloodGroup: 'B+', units: 123, maxUnits: 180, status: 'sufficient' },
    { bloodGroup: 'B-', units: 34, maxUnits: 120, status: 'critical' },
    { bloodGroup: 'O+', units: 198, maxUnits: 250, status: 'sufficient' },
    { bloodGroup: 'O-', units: 45, maxUnits: 150, status: 'critical' },
    { bloodGroup: 'AB+', units: 78, maxUnits: 100, status: 'sufficient' },
    { bloodGroup: 'AB-', units: 23, maxUnits: 80, status: 'critical' },
  ]

  const renderMainContent = () => {
    if (activeTab === 'dashboard') {
      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Blood Stock Overview</h2>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Sufficient</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span>Critical</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bloodData.map((blood) => (
              <BloodBucket
                key={blood.bloodGroup}
                bloodGroup={blood.bloodGroup}
                units={blood.units}
                maxUnits={blood.maxUnits}
                status={blood.status}
              />
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
          </h3>
          <p className="text-gray-500">This section is under development</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8 overflow-y-auto">{renderMainContent()}</main>
      </div>

      <SOSButton onClick={() => setIsSOSModalOpen(true)} />
      <SOSModal isOpen={isSOSModalOpen} onClose={() => setIsSOSModalOpen(false)} />
    </div>
  )
}

export default Hdash
