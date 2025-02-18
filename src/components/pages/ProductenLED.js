import "../../App.css";
import HeroSectionProducts from "../HeroSectionProducts";
import Footer from "../Footer";
import TopCardProducts from "../TopCardProducts";
import ImageCollage from "../ImageCollage";
import TextDivider from "../TextDivider";

function ProductenLED() {
    const collageImages = [
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/1.jfif",
            alt: "LED Display 1"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/2.jpeg",
            alt: "LED Display 2"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/3.jfif",
            alt: "LED Display 3"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/4.jpeg",
            alt: "LED Display 4"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/5.jfif",
            alt: "LED Display 5"
        }
    ];

    const secondSetOfImages = [
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/6.jfif",
            alt: "LED Display 6"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/7.jfif",
            alt: "LED Display 7"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/8.jfif",
            alt: "LED Display 8"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/9.jfif",
            alt: "LED Display 9"
        },
        {
            src: process.env.PUBLIC_URL + "/images/led_verlichting/10.jfif",
            alt: "LED Display 10"
        }
    ];

    return (
        <>
            <HeroSectionProducts />
            <TopCardProducts
                imageUrl={process.env.PUBLIC_URL + "/images/test.jfif"}
                title="LED VERLICHTING"
                text={
                    "LED Verlichting is de perfecte toevoeging aan uw feest of evenement.\n Met LED-verlichting maakt u bijvoorbeeld in een oogopslag duidelijk\nhoe oud (of jong) iemand is geworden.\n\nWij hebben ook speciale symbolen als een hartteken en '&' en alle cijfers en letters.\n\nUiteraard zijn ook alle combinaties mogelijk, neemt u hier gerust contact met ons over op!"
                }
            />
            <TextDivider 
                text="Ontdek de veelzijdige mogelijkheden van onze LED-verlichting, waarmee u elke ruimte kunt transformeren met een magische gloed. Onze LED's zijn perfect voor het creëren van unieke en persoonlijke sferen, dankzij de eindeloze combinaties van cijfers, letters en symbolen.\n\nJe huurt onze LED-verlichting al vanaf 29,95 huren per stuk."
            />
            <ImageCollage images={collageImages} />
            <ImageCollage images={secondSetOfImages} reversed={true} />
            <Footer />
        </>
    );
}

export default ProductenLED;
