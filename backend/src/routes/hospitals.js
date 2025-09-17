const express = require('express');
const { supabase } = require('../supabaseClient');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    hospitalName,
    hospitalId,
    street,
    landmark,
    areaLocality,
    city,
    state,
    pincode,
    email,
    contactNo
  } = req.body;

  const address = `${street}, ${landmark}, ${city}, ${state} - ${pincode}`;
  const area = areaLocality;

  try {
    const { data, error } = await supabase
      .from('hospitals')
      .insert([
        {
          uid: hospitalId,
          name: hospitalName,
          address,
          area,
          email,
          primary_contact: contactNo
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(400).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
  console.log('Received hospital data:', req.body);

});

module.exports = router;
