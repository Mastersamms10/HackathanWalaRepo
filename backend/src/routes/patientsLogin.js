const express = require('express');
const { supabase } = require('../supabaseClient');
const router = express.Router();

// ✅ Patient Login Route
router.post('/login', async (req, res) => {
  const { patientId, patientName } = req.body;
  console.log('Received patient login request:', { patientId, patientName });

  try {
    // Fetch patient by ID
    const { data, error } = await supabase
      .from('patients')
      .select('*')
      .eq('uid', patientId) // match patient UID
      .single();

    console.log('Supabase patient response:', { data, error });

    if (error || !data) {
      return res
        .status(404)
        .json({ success: false, error: 'Patient not found or UID mismatch' });
    }

    // Check name match
    if (data.name.toLowerCase() !== patientName.toLowerCase()) {
      return res
        .status(401)
        .json({ success: false, error: 'Patient name does not match ID' });
    }

    return res.status(200).json({ success: true, patient: data });
  } catch (err) {
    console.error('Unexpected patient server error:', err.message);
    return res
      .status(500)
      .json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
