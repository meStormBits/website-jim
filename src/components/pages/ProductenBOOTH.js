import "../../App.css";
import HeroSectionProducts from "../HeroSectionProducts";
import Footer from "../Footer";
import TopCardProducts from "../TopCardProducts";
import ImageCollage from "../ImageCollage";
import TextDivider from "../TextDivider";
import ContactForm from "../ContactForm";

function ProductenBOOTH() {
	const collageImages = [
		{
			src: process.env.PUBLIC_URL + "/images/photobooth/1.jfif",
			alt: "LED Display 1",
		},
		{
			src: process.env.PUBLIC_URL + "/images/photobooth/2.jfif",
			alt: "LED Display 2",
		},
		{
			src: process.env.PUBLIC_URL + "/images/photobooth/3.jfif",
			alt: "LED Display 3",
		},
		{
			src: process.env.PUBLIC_URL + "/images/photobooth/4.jfif",
			alt: "LED Display 4",
		},
		{
			src: process.env.PUBLIC_URL + "/images/photobooth/5.jfif",
			alt: "LED Display 5",
		},
	];

	return (
		<>
			<HeroSectionProducts />
			<TopCardProducts
				imageUrl={process.env.PUBLIC_URL + "/images/photobooth/main.jfif"}
				title="PHOTOBOOTH"
				text={
					"Een photobooth is ideaal om uw feest succesvol en memorabel te maken.\n Het geeft uw gasten ook nog eens een uniek cadeau: een tastbare herinnering aan een fantastische evenement! "
				}
			/>
			<TextDivider
				text="Leg bijzondere momenten vast met onbeperkte foto’s en boomerangs,
allemaal met slechts één tik op het scherm.\n En alsof dat nog niet genoeg is,
kunnen de boomerangs zelfs worden omgetoverd tot GIF’s!
\n\nDaarnaast worden al uw herinneringen binnen 14 dagen na het
evenement rechtstreeks naar uw inbox gestuurd. \n\nKiest u voor een photobooth met prints?\n Dan hoeven uw gasten niet
14 dagen te wachten om hun foto’s te bewonderen!
\nDe gemaakte foto’s worden direct uitgeprint, zodat uw gasten een
fysieke herinnering hebben aan uw feest of evenement.
\n\nHet design van de prints kan volledig worden afgestemd op uw
feest of evenement. \nU kunt zowel de kleuren als de tekst zelf bepalen.
Er zijn talloze opties beschikbaar, en daarom bespreken wij het design
vooraf met u. \nHieraan zijn geen extra kosten verbonden!\n\nDe kosten voor de Photobooth beginnen vanaf <bold>€ 139,95</bold>"
			/>

			<ImageCollage images={collageImages} />

            <div style={{ marginTop: '20px', background: 'white', padding: '40px 0' }}>
                <ContactForm 
                    productForm={true} 
                    emailSubject="Photobooth Aanvraag"
                />
            </div>

			<Footer />
		</>
	);
}

export default ProductenBOOTH;
