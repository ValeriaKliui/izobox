import { useContentModal } from "@hooks/useContentModal";
import { useWindowWidth } from "@react-hook/window-size";
import { Modal } from "@shared/Modals";
import { ContentModal } from "@shared/Modals/ContentModal";
import { FC, memo, useEffect, useRef, useState } from "react";

import { SliderProps } from "./interfaces";
import {
  Container,
  FirstArrow,
  Photo,
  Photos,
  SecondArrow,
  Wrapper,
} from "./styled";

export const Slider: FC<SliderProps> = memo(({ sliderPhotos }) => {
  const photoRef = useRef<HTMLImageElement>(null);
  const windowWidth = useWindowWidth();
  const [elemHeight, setElemHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isArrowDisabled, setIsArrowsDisabled] = useState({
    first: true,
    second: false,
  });
  const showedPhotosAmount = 4;
  const gap = 10;

  const { onContentClick, onContentClose, isModalOpened } = useContentModal();

  const showNext = () => {
    setScrollHeight((prev) => {
      const scrollH = prev - elemHeight - gap;
      const scrolledPhotosAmount =
        Math.abs(scrollH / (elemHeight + gap)) + showedPhotosAmount;
      setIsArrowsDisabled((prev) => ({ ...prev, first: false }));
      if (scrolledPhotosAmount === sliderPhotos.length) {
        setIsArrowsDisabled((prev) => ({ ...prev, second: true }));
      }
      if (scrolledPhotosAmount > sliderPhotos.length) {
        return prev;
      }
      return scrollH;
    });
  };
  const showPrev = () => {
    setScrollHeight((prev) => {
      const scrollH = prev + elemHeight + gap;
      setIsArrowsDisabled((prev) => ({ ...prev, second: false }));
      if (scrollH >= 0) {
        setIsArrowsDisabled((prev) => ({ ...prev, first: true }));
        return 0;
      }
      return scrollH;
    });
  };

  useEffect(() => {
    const heightElem = photoRef?.current?.getBoundingClientRect().height;
    if (heightElem) setElemHeight(heightElem);
  }, [windowWidth]);

  return (
    <>
      <Wrapper className="flex-col-gap">
        <FirstArrow onClick={showPrev} $disabled={isArrowDisabled.first} />
        <Container
          $height={elemHeight && showedPhotosAmount * (elemHeight + gap)}
        >
          <Photos $gap={gap} $scrollHeight={scrollHeight}>
            {sliderPhotos.map((src, index) => (
              <Photo
                src={src}
                key={src}
                ref={photoRef}
                onClick={() => onContentClick(index, sliderPhotos)}
              />
            ))}
          </Photos>
        </Container>
        <SecondArrow onClick={showNext} $disabled={isArrowDisabled.second} />
      </Wrapper>
      <Modal isOpened={isModalOpened} onClose={onContentClose}>
        <ContentModal contentSrc={sliderPhotos} />
      </Modal>
    </>
  );
});
