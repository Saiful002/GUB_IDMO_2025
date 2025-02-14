import { google } from "googleapis";
import { authenticate } from "@google-cloud/local-auth";
import path from "path";

// Function to authenticate Google Sheets API
async function getAuthClient() {
  const auth = await authenticate({
    keyfilePath: path.join(process.cwd(), "google-credentials.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return auth;
}

// Function to append data to Google Sheets
async function appendToSheet(auth, formData) {
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = "1NV7TPanjrBM57nbItgkvobc-nQqjJT2rH5HmRSJqH0A"; // Replace with your Google Sheet ID
  const range = "Sheet1!A1"; // Range to insert data (change as needed)

  const values = [
    [
      formData.name,
      formData.email,
      formData.studentId,
      formData.department,
      formData.batch,
      formData.paymentMethod,
      formData.bkashNumber || "",
      formData.transactionId,
      formData.number,
    ],
  ];

  const resource = {
    values,
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    resource,
  });
}

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      const auth = await getAuthClient();
      await appendToSheet(auth, formData);

      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error saving data to Google Sheets" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
