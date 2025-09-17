const express = require('express');
const { supabase } = require('../supabaseClient');
const router = express.Router();

function generatePatientId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-char ID
}

router.post('/', async (req, res) => {
  const {
    fullName,
    email,
    contactNo,
    bloodGroup,
    rhFactor,
    street,
    landmark,
    areaLocality,
    city,
    state,
    pincode,
    medicalCondition,
    doctorId
  } = req.body;

  const patientId = generatePatientId();
  const address = `${street}, ${landmark}, ${city}, ${state} - ${pincode}`;
  const area = areaLocality;
  const fullBloodGroup = `${bloodGroup}${rhFactor}`;

  try {
    const { data, error } = await supabase
      .from('patients')
      .insert([
        {
          id: patientId,
          full_name: fullName,
          email,
          contact_no: contactNo,
          blood_group: fullBloodGroup,
          address,
          area,
          medical_condition: medicalCondition,
          doctor_id: doctorId
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return res.status(400).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, patientId, data });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

module.exports = router;
