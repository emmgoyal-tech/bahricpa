const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/api/contact", (req, res) => {
  // Honeypot check - bots fill hidden fields
  if (req.body.website) {
    return res.status(200).json({ success: true });
  }

  const fullName = sanitize(req.body.full_name);
  const email = sanitize(req.body.email);
  const phone = sanitize(req.body.phone || "");
  const subject = sanitize(req.body.subject || "");
  const message = sanitize(req.body.message);

  const errors = [];
  if (!fullName) errors.push("full_name is required");
  if (!email) errors.push("email is required");
  if (!message) errors.push("message is required");
  if (email && !isValidEmail(email)) errors.push("Invalid email format");

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const stmt = db.prepare(
      "INSERT INTO contact_submissions (full_name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)"
    );
    stmt.run(fullName, email, phone, subject, message);
    return res.status(200).json({ success: true, message: "Contact form submitted successfully" });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ success: false, errors: ["Internal server error"] });
  }
});

app.use((req, res) => {
  res.status(404).json({ success: false, errors: ["Not found"] });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});

module.exports = app;
