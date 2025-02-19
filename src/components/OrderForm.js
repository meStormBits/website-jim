import React, { useState } from "react";
import "./OrderForm.css";
import {getApiUrl} from "../App.js"

function OrderForm() {
	// Add at the beginning of the component
	const hours = Array.from({ length: 17 }, (_, i) => i + 6); // 6 to 22
	const minutes = ["00", "15", "30", "45"];

	const handleTimeChange = (e) => {
		const { name, value } = e.target;
		const currentTime = formData.tijdstip.split(":");

		if (name === "hour") {
			setFormData({
				...formData,
				tijdstip: `${value}:${currentTime[1] || "00"}`,
			});
		} else {
			setFormData({
				...formData,
				tijdstip: `${currentTime[0] || "06"}:${value}`,
			});
		}
	};

	const [formData, setFormData] = useState({
		voornaam: "",
		achternaam: "",
		email: "",
		telefoon: "",
		adres: "",
		postcode_plaats: "",
		datum: "",
		tijdstip: "",
		beschrijving: "",
		privacyAccepted: false,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://evokegames.gg:8000/api/contacts/v4/contacts', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					info: {
						name: {
							first: formData.voornaam,
							last: formData.achternaam,
						},
						emails: {
							items: [
								{
									tag: "MAIN",
									email: formData.email,
								},
							],
						},
						phones: {
							items: [
								{
									tag: "MAIN",
									countryCode: "NL",
									phone: formData.telefoon,
								},
							],
						},
						addresses: {
							items: [
								{
									tag: "HOME",
									address: {
										country: "NL",
										city: formData.postcode_plaats
											.split(" ")
											.slice(1)
											.join(" "),
										postalCode: formData.postcode_plaats.split(" ")[0],
										addressLine: formData.adres,
									},
								},
							],
						},
						extendedFields: {
							items: {
								"custom.beschrijving": formData.beschrijving,
								"custom.datum": formData.datum,
								"custom.tijdstip": formData.tijdstip,
							},
						},
						locale: "nl-nl",
					},
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				console.error("API Error:", errorData);
				throw new Error(
					`Failed to create contact: ${errorData.message || "Unknown error"}`
				);
			}

			const result = await response.json();
			console.log("Success:", result);
			alert(
				"Bedankt voor uw bestelling! We nemen zo spoedig mogelijk contact met u op."
			);
			setFormData({
				voornaam: "",
				achternaam: "",
				email: "",
				telefoon: "",
				adres: "",
				postcode_plaats: "",
				datum: "",
				tijdstip: "",
				beschrijving: "",
			});
		} catch (error) {
			console.error("Error:", error);
			alert("Er is iets misgegaan. Probeer het later opnieuw.");
		}
	};

	return (
		<div className="order-form-container">
			<form onSubmit={handleSubmit} className="order-form">
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

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="adres">Straatnaam + Huisnummer</label>
						<input
							type="text"
							id="adres"
							name="adres"
							value={formData.adres}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="postcode_plaats">Postcode + Woonplaats</label>
						<input
							type="text"
							id="postcode_plaats"
							name="postcode_plaats"
							value={formData.postcode_plaats}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="form-row">
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
					<div className="form-group">
						<label htmlFor="tijdstip">Tijdstip</label>
						<div className="time-select-container">
							<select
								name="hour"
								value={formData.tijdstip.split(":")[0] || ""}
								onChange={handleTimeChange}
								required>
								<option value="">Uur</option>
								{hours.map((hour) => (
									<option key={hour} value={hour.toString().padStart(2, "0")}>
										{hour.toString().padStart(2, "0")}
									</option>
								))}
							</select>
							<span>:</span>
							<select
								name="minute"
								value={formData.tijdstip.split(":")[1] || ""}
								onChange={handleTimeChange}
								required>
								<option value="">Min</option>
								{minutes.map((minute) => (
									<option key={minute} value={minute}>
										{minute}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<div className="form-group full-width">
					<label htmlFor="beschrijving">Beschrijving</label>
					<textarea
						id="beschrijving"
						name="beschrijving"
						rows="6"
						value={formData.beschrijving}
						onChange={handleChange}
						placeholder="Beschrijf hier uw wensen..."
						required></textarea>
				</div>
				<div className="privacy-section">
					<div className="checkbox-container">
						<input
							type="checkbox"
							id="privacy"
							name="privacyAccepted"
							checked={formData.privacyAccepted}
							onChange={(e) =>
								setFormData({ ...formData, privacyAccepted: e.target.checked })
							}
							required
						/>
						<label htmlFor="privacy" className="privacy-label">
							Ik ga akkoord met het privacybeleid en bevestig dat ik de algemene
							voorwaarden heb gelezen en hiermee akkoord ga. Ook bevestig ik dat
							mijn persoonlijke gegevens in overeenstemming met de wet mogen
							worden gebruikt.
						</label>
					</div>
					<a
						href="/terms.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="pdf-link">
						<i className="fas fa-file-pdf"></i>
					</a>
				</div>
				<button type="submit" className="submit-button">
					Verstuur
				</button>
			</form>
		</div>
	);
}

export default OrderForm;
