import {
  chooseContentIndex,
  chooseContentSrc,
  closeContentModal,
  openContentModal,
  selectIsContentModalOpened,
} from "@store/app/appSlice";

import { useAppDispatch, useAppSelector } from "./typedHooks";

export const useContentModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpened = useAppSelector(selectIsContentModalOpened);

  const onContentClick = (index: number, contentSrc: string[]) => {
    dispatch(chooseContentSrc(contentSrc));
    dispatch(chooseContentIndex(index));
    dispatch(openContentModal());
  };

  const onContentClose = () => {
    dispatch(chooseContentSrc([]));
    dispatch(closeContentModal());
    dispatch(chooseContentIndex(0));
  };

  return { onContentClick, onContentClose, isModalOpened };
};
