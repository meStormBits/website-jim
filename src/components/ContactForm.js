import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm({
	productForm = false,
	emailSubject = "Contactformulier",
}) {
	const [formData, setFormData] = useState({
		voornaam: "",
		achternaam: "",
		email: "",
		telefoon: "",
		beschrijving: "",
		locatie: "",
		datum: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		// Store the form action
		const formAction = e.target.action;

		// After form submission, reset the form
		setTimeout(() => {
			setFormData({
				voornaam: "",
				achternaam: "",
				email: "",
				telefoon: "",
				beschrijving: "",
			});
		}, 100);
	};

	return (
		<div className="contact-form-container">
			<form
				target="_blank"
				action="https://formsubmit.co/thisiszide@gmail.com"
				method="POST"
				className="contact-form"
				onSubmit={handleSubmit}>
				<input type="hidden" name="_subject" value={emailSubject} />
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_template" value="table" />
				<input type="hidden" name="_next" value="http://localhost:3000/" />
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="voornaam">Voornaam</label>
						<input
							type="text"
							id="voornaam"
							name="voornaam"
							value={formData.voornaam}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="achternaam">Achternaam</label>
						<input
							type="text"
							id="achternaam"
							name="achternaam"
							value={formData.achternaam}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="telefoon">Telefoonnummer</label>
						<input
							type="tel"
							id="telefoon"
							name="telefoon"
							value={formData.telefoon}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				{productForm && (
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="locatie">Locatie</label>
							<input
								type="text"
								id="locatie"
								name="locatie"
								value={formData.locatie}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="datum">Datum</label>
							<input
								type="date"
								id="datum"
								name="datum"
								value={formData.datum}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
				)}
				<div className="form-group full-width">
					<label htmlFor="beschrijving">Bericht</label>
					<textarea
						id="beschrijving"
						name="beschrijving"
						rows="6"
						value={formData.beschrijving}
						onChange={handleChange}
						placeholder="Schrijf hier uw bericht..."
						required></textarea>
				</div>

				<p className="form-note">
					Waarschuwing: Dit zal een nieuw tablad openen, graag dit even afwachten, dan
					wordt je bericht verzonden
				</p>

				<button type="submit" className="submit-button">
					VERSTUUR
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
