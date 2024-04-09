import {
  choosePhotoIndex,
  closePhotoModal,
  openPhotoModal,
  selectIsPhotoModalOpened,
} from "@store/app/appSlice";

import { useAppDispatch, useAppSelector } from "./typedHooks";

export const usePhotoModal = () => {
  const isModalOpened = useAppSelector(selectIsPhotoModalOpened);
  const dispatch = useAppDispatch();
  const onPhotoClick = (index: number) => {
    dispatch(choosePhotoIndex(index));
    dispatch(openPhotoModal());
  };
  const onPhotoClose = () => {
    dispatch(closePhotoModal());
    dispatch(choosePhotoIndex(0));
  };

  return { onPhotoClick, onPhotoClose, isModalOpened };
};
