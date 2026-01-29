const Database = require("better-sqlite3");
const path = require("path");

const DB_PATH = path.join(__dirname, "contact.db");

function initializeDatabase() {
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  return db;
}

const db = initializeDatabase();
module.exports = db;
