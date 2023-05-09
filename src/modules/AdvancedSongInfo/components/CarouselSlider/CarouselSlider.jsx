import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { parseAnnotationHtml } from "modules/AdvancedSongInfo/helpers/parseAnnotationHtml";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselSliderStyles.css";

const CarouselSlider = ({ description }) => {
  const carouselMarkup = description ? parseAnnotationHtml(description) : "";
  return (
    <>
      {carouselMarkup && carouselMarkup[0] && (
        <Carousel
          autoPlay
          interval={8000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          {carouselMarkup.map((item, index) => (
            <Box key={index}>
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </Box>
          ))}
        </Carousel>
      )}
    </>
  );
};

export { CarouselSlider };
