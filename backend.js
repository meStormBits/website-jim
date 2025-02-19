const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json()); // Add this to parse JSON bodies

app.get("/", (req, res) => {
	res.json("hi!");
});

app.post("/api/contacts/v4/contacts", async (req, res) => {
	try {
		const response = await axios.post(
			"https://www.wixapis.com/contacts/v4/contacts",
			req.body,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: process.env.REACT_APP_WIX_OAUTH_TOKEN,
					"wix-site-id": process.env.REACT_APP_WIX_SITE_ID,
				},
			}
		);
		res.json(response.data);
	} catch (error) {
		console.error(
			"Error:",
			error.response && error.response.data
				? error.response.data
				: error.message
		);
		res
			.status(
				error.response && error.response.status ? error.response.status : 500
			)
			.json({
				message:
					error.response && error.response.data && error.response.data.message
						? error.response.data.message
						: "Internal server error",
			});
	}
});

// Add debug logging to the submit-form endpoint
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

// Remove the nodemailer transporter and replace the submit-form endpoint
app.post("/api/submit-form", async (req, res) => {
	console.log("Received request body:", req.body);
	try {
		const {
			voornaam,
			achternaam,
			email,
			telefoon,
			beschrijving,
			locatie,
			datum,
		} = req.body;

		const { data, error } = await resend.emails.send({
			from: "Jim's Partyevents <onboarding@resend.dev>",
			to: "kalkmanlars@gmail.com",
			subject: req.body._subject || "Nieuw Contact Formulier",
			html: `
                <h2>Nieuwe aanvraag ontvangen</h2>
                <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefoon:</strong> ${telefoon}</p>
                ${locatie ? `<p><strong>Locatie:</strong> ${locatie}</p>` : ""}
                ${datum ? `<p><strong>Datum:</strong> ${datum}</p>` : ""}
                <p><strong>Bericht:</strong></p>
                <p>${beschrijving}</p>
            `,
		});

		if (error) {
			throw error;
		}

		console.log("Email sent successfully");
		res.json({ success: true });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({
			success: false,
			message: "Failed to send email",
			error: error.message,
		});
	}
});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
