import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import TextCard from "../TextCard";
import ProductBox from "../ProductBox";
import ContactForm from "../ContactForm";  // Add this import
import Reviews from '../Reviews';

function Home() {
    return (
        <>
            <HeroSection />
            <TextCard
                imageUrl={process.env.PUBLIC_URL + "/images/over_ons.jpg"}
                title="OVER ONS"
                text={
                    "Bent u bezig met het organiseren van een feest of evenement?\n En kunt u hier wel wat hulp bij gebruiken?\n\n Dan bent u bij Van Vlimmeren Feestverhuur aan het juiste adres.\n\n Wij nemen uw zorg over de aankleding van het feest of evenement geheel uit handen.\n\n Tevens verhuren wij diverse feestartikelen."
                }
            />
            <ProductBox
                imageUrl={process.env.PUBLIC_URL + "/images/65.jfif"}
                title="LED VERLICHTING"
                text={`LED-verlichting is de perfecte toevoeging aan uw feest of evenement.\nMet bijvoorbeeld LED-cijfers maakt u in één oogopslag duidelijk hoe oud (of jong) iemand wordt.`}
                buttonText="LEES MEER"
                route="/producten/led_verlichting"
                reverse={false}
            />
            <ProductBox
                imageUrl={process.env.PUBLIC_URL + "/images/ballon_decoratie.jpeg"}
                title="BALLONDECORATIE"
                text={
                    "Met ballondecoratie valt u extra op en schept u vanaf het eerste moment de juiste sfeer!\nWij helpen u graag de juiste kleuren en stijl te vinden!"
                }
                buttonText="LEES MEER"
                route="/producten/ballondecoratie"
                reverse={true}
            />
            <ProductBox
                imageUrl={process.env.PUBLIC_URL + "/images/photobooth.jfif"}
                title="PHOTOBOOTH"
                text={
                    "Met ballondecoratie valt u extra op en schept u vanaf het eerste moment de juiste sfeer!\nWij helpen u graag de juiste kleuren en stijl te vinden!"
                }
                buttonText="LEES MEER"
                route="/producten/photobooth"
                reverse={false}
            />
            <Reviews />

            <div style={{ marginTop: '20px', background: '#bdbeb2', padding: '40px 0' }}>
                <ContactForm productForm={false} emailSubject="Homepagina Contact"/>
            </div>
            <Footer />
        </>
    );
}

export default Home;
