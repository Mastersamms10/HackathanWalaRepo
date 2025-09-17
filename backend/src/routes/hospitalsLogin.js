const express = require('express');
const { supabase } = require('../supabaseClient');
const router = express.Router(); // ✅ This line defines 'router'

router.post('/login', async (req, res) => {
  const { hospitalName, uid } = req.body;
  console.log('Received login request:', { hospitalName, uid });

  try {
    const { data, error } = await supabase
  .from('hospitals')
  .select('*')
  .eq('uid', uid)
  .single();

    console.log('Supabase response:', { data, error });

    if (error || !data) {
      return res.status(404).json({ success: false, error: 'Hospital not found or UID mismatch' });
    }

    if (data.name.toLowerCase() !== hospitalName.toLowerCase()) {
      return res.status(401).json({ success: false, error: 'Hospital name does not match UID' });
    }

    return res.status(200).json({ success: true, hospital: data });
  } catch (err) {
    console.error('Unexpected server error:', err.message);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router; // ✅ This line exports the router to be used in server.js
