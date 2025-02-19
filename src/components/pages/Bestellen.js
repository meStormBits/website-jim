import "../../App.css";
import HeroSectionProducts from "../HeroSectionProducts";
import Footer from "../Footer";
import TopCardProducts from "../TopCardProducts";
import OrderForm from "../OrderForm";
import TextDivider from "../TextDivider";

function Bestellen() {
    return (
        <>
            <HeroSectionProducts />
            <TopCardProducts
                imageUrl={process.env.PUBLIC_URL + "/images/test.jfif"}
                title="BESTELLEN"
                text={
                    "Wilt u een bestelling plaatsen of heeft u een vraag?\nVul dan onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.\n\nWij helpen u graag verder met het realiseren van uw feest of evenement!"
                }
            />
            <TextDivider 
                text="Vul hieronder uw gegevens in en wij nemen binnen 24 uur contact met u op.\nWij kijken er naar uit om uw feest of evenement onvergetelijk te maken!"
            />
            <OrderForm />
            <Footer />
        </>
    );
}

export default Bestellen;