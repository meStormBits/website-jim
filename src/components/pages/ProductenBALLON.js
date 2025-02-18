import "../../App.css";
import HeroSectionProducts from "../HeroSectionProducts";
import Footer from "../Footer";
import TopCardProducts from "../TopCardProducts";
import ImageCollage from "../ImageCollage";

function ProductenBALLON() {
    const collageImages = [
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/1.jfif",
            alt: "LED Display 1"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/2.jfif",
            alt: "LED Display 2"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/10.jfif",
            alt: "LED Display 3"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/4.jfif",
            alt: "LED Display 4"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/3.jfif",
            alt: "LED Display 5"
        }
    ];
    const secondSetOfImages = [
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/6.jfif",
            alt: "LED Display 6"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/7.jfif",
            alt: "LED Display 7"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/8.jfif",
            alt: "LED Display 8"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/9.jfif",
            alt: "LED Display 9"
        },
        {
            src: process.env.PUBLIC_URL + "/images/ballondecoratie/5.jfif",
            alt: "LED Display 10"
        }
    ];

    return (
        <>
            <HeroSectionProducts />
            <TopCardProducts
                imageUrl={process.env.PUBLIC_URL + "/images/ballondecoratie/main.jpg"}
                title="BALLONDECORATIE"
                text={
                    "Ballondecoratie zorgt ervoor dat u extra opvalt en u meteen de juiste sfeer kunt scheppen.\n\n Ballonpilaren zijn prachtig vormgegeven en geven een\n feestelijk accent aan elke gelegenheid. \nOf het nu gaat om een verjaardagsfeest, jubileum, bedrijfsevenement of een andere speciale gebeurtenis. "
                }
            />
            <ImageCollage images={collageImages} />
            <ImageCollage images={secondSetOfImages} reversed={true} />
            <Footer />
        </>
    );
}

export default ProductenBALLON;
