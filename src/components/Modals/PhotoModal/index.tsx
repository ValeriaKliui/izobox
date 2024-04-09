import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { choosePhotoIndex, selectPhotoIndexClicked } from "@store/app/appSlice";
import { FC } from "react";

import { PhotoModalProps } from "./interfaces";
import { Container, Img, LeftArrow, RightArrow } from "./styled";

export const PhotoModal: FC<PhotoModalProps> = ({ photosSrc }) => {
  const photoIndex = useAppSelector(selectPhotoIndexClicked);
  const dispatch = useAppDispatch();

  const showPrevPhoto = () => {
    const nextIndex = photoIndex - 1;
    const isMorePhotos = nextIndex >= 0;
    dispatch(choosePhotoIndex(isMorePhotos ? nextIndex : photosSrc.length - 1));
  };

  const showNextPhoto = () => {
    const nextIndex = photoIndex + 1;
    const isMorePhotos = nextIndex < photosSrc.length;
    dispatch(choosePhotoIndex(isMorePhotos ? nextIndex : 0));
  };

  return (
    <Container>
      <LeftArrow onClick={showPrevPhoto} />
      <Img src={photosSrc[photoIndex]} />
      <RightArrow onClick={showNextPhoto} />
    </Container>
  );
};
