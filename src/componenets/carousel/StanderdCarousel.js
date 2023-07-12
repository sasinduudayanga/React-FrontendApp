import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function StanderdCarousel({ data }) {
    return (
        <Carousel autoPlay="true" interval="700">
            {data.map((item) => (
                <div>
                    <img src={item.image} alt={item.imageAlt} />

                </div>
            ))}

        </Carousel>
    )
}

export default StanderdCarousel