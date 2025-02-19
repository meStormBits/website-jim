import React, { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
    const [formData, setFormData] = useState({
        voornaam: '',
        achternaam: '',
        email: '',
        telefoon: '',
        adres: '',
        beschrijving: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contacts/v4/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.REACT_APP_WIX_OAUTH_TOKEN,
                    'wix-site-id': process.env.REACT_APP_WIX_SITE_ID
                },
                body: JSON.stringify({
                    info: {
                        name: {
                            first: formData.voornaam,
                            last: formData.achternaam
                        },
                        emails: {
                            items: [{ 
                                tag: 'MAIN',
                                email: formData.email 
                            }]
                        },
                        phones: {
                            items: [{ 
                                tag: 'MAIN',
                                countryCode: 'NL',
                                phone: formData.telefoon 
                            }]
                        },
                        extendedFields: {
                            items: {
                                'custom.beschrijving': formData.beschrijving
                            }
                        },
                        locale: 'nl-nl'
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error(`Failed to create contact: ${errorData.message || 'Unknown error'}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Bedankt voor uw bestelling! We nemen zo spoedig mogelijk contact met u op.');
            setFormData({
                voornaam: '',
                achternaam: '',
                email: '',
                telefoon: '',
                adres: '',
                beschrijving: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Er is iets misgegaan. Probeer het later opnieuw.');
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

                <div className="form-group full-width">
                    <label htmlFor="beschrijving">Beschrijving</label>
                    <textarea 
                        id="beschrijving" 
                        name="beschrijving" 
                        rows="6"
                        value={formData.beschrijving}
                        onChange={handleChange}
                        placeholder="Beschrijf hier uw wensen..."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Verstuur</button>
            </form>
        </div>
    );
}

export default OrderForm;