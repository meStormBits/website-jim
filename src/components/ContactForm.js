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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        try {
            const response = await fetch('http://evokegames.gg:8000/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: emailSubject,
                })
            });
    
            if (!response.ok) {
                throw new Error('Form submission failed');
            }
    
            alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
            setFormData({
                voornaam: "",
                achternaam: "",
                email: "",
                telefoon: "",
                beschrijving: "",
                locatie: "",
                datum: "",
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Er is iets misgegaan. Probeer het later opnieuw.');
        }
    };
    return (
        <div className="contact-form-container">
            <form
                className="contact-form"
                onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value={emailSubject} />
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
