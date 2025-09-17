// routes/sendEmail.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// configure transporter (example uses Gmail app password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `smsoksam@gmail.com`, // your email
    pass: `*sAmith10`, // app password or SMTP key
  },
});

// Helper - optionally lookup donor emails by donorIds from DB if not provided
async function lookupDonorsEmails(donorIds = []) {
  // TODO: replace with your DB lookup; returning example structure
  // e.g. SELECT id, email, full_name FROM donors WHERE id IN (...)
  return donorIds.map((id) => ({
    id,
    email: "donor+" + id + "@example.com",
    name: "Donor " + id,
  }));
}

router.post("/send-email", async (req, res) => {
  try {
    const { donors = [], donorIds = [], subject, message, meta } = req.body;

    // donors: array of {id, email, name} (client supplied)
    // donorIds: fallback to lookup on server
    const recipients = [...donors]; // clone

    // if donorIds provided but no emails in recipients, lookup
    if (donorIds && donorIds.length > 0) {
      const missingIds = donorIds.filter(
        (id) => !recipients.some((r) => r.id === id && r.email)
      );
      if (missingIds.length > 0) {
        const lookedUp = await lookupDonorsEmails(missingIds);
        lookedUp.forEach((l) => {
          if (l.email) recipients.push({ id: l.id, email: l.email, name: l.name });
        });
      }
    }

    if (recipients.length === 0) {
      return res.status(400).json({ success: false, message: "No recipient emails found." });
    }

    // Send to each recipient individually (personalized)
    const sendPromises = recipients.map((r) => {
      const personalized = message.replace("{name}", r.name || "Friend");
      return transporter.sendMail({
        from: `"RakhtSetu" <${`smsoksam@gmail.com`}>`,
        to: r.email,
        subject: subject,
        text: personalized,
        html: `<pre style="font-family:inherit">${personalized.replace(/\n/g, "<br/>")}</pre>`,
      });
    });

    await Promise.all(sendPromises);

    return res.json({ success: true, message: "Emails sent." });
  } catch (err) {
    console.error("send-email error", err);
    return res.status(500).json({ success: false, message: "Server error sending emails." });
  }
});

module.exports = router;
