import "../../App.css";
import HeroSectionProducts from "../HeroSectionProducts";
import Footer from "../Footer";
import TopCardProducts from "../TopCardProducts";
import ImageCollage from "../ImageCollage";

function ProductenBOOTH() {
    const collageImages = [
        {
            src: "../images/photobooth/1.jfif",
            alt: "LED Display 1"
        },
        {
            src: "../images/photobooth/2.jfif",
            alt: "LED Display 2"
        },
        {
            src: "../images/photobooth/3.jfif",
            alt: "LED Display 3"
        },
        {
            src: "../images/photobooth/4.jfif",
            alt: "LED Display 4"
        },
        {
            src: "../images/photobooth/5.jfif",
            alt: "LED Display 5"
        }
    ];


    return (
        <>
            <HeroSectionProducts />
            <TopCardProducts
                imageUrl="../images/photobooth/main.jfif"
                title="PHOTOBOOTH"
                text={
                    "Een photobooth is ideaal om uw feest succesvol en memorabel te maken.\n Het geeft uw gasten ook nog eens een uniek cadeau: een tastbare herinnering aan een fantastische evenement! "
                }
            />
            <ImageCollage images={collageImages} />
            <Footer />
        </>
    );
}

export default ProductenBOOTH;
