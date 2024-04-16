import { EXTRA_OPTIONS } from "@constants/index";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { Button } from "@shared/Button";
import { BigText } from "@shared/Typography/Typography";
import {
  addExtraOption,
  removeExtraOption,
  selectExtraOptions,
} from "@store/izobox/basicIzobox";
import { useCallback, useState } from "react";

import {
  Arrow,
  FirstPhoto,
  Gallery,
  GalleryPhoto,
  Option,
  OptionArrow,
  OptionButton,
  OptionDescription,
  OptionImg,
  OptionPrice,
  Options,
  OptionTitle,
  TitleContainer,
} from "./styled";

export const UpgradeBasic = () => {
  const [isShown, setIsShown] = useState(false);
  const [showedDescID, setShowedDescID] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const extraOptions = useAppSelector(selectExtraOptions);
  const toggleUpgrade = () => setIsShown((prev) => !prev);

  const toggleOption = useCallback(
    (optionID: number) => () => {
      const isAdded = extraOptions.includes(optionID);
      isAdded
        ? dispatch(removeExtraOption(optionID))
        : dispatch(addExtraOption(optionID));
    },
    [dispatch, extraOptions],
  );

  const toggleDescriptions = useCallback(
    (optionID: number) => () => {
      setShowedDescID((prevIDS) => {
        if (prevIDS.includes(optionID))
          return prevIDS.filter((value) => value !== optionID);
        else return [...prevIDS, optionID];
      });
    },
    [],
  );

  return (
    <div className="wrapper">
      <TitleContainer onClick={toggleUpgrade}>
        <h3 className="primary-text">Прокачай свой IzoBox</h3>
        <Arrow $isShown={isShown} />
      </TitleContainer>
      <BigText>Добавить дополнительные опции</BigText>
      {isShown && (
        <Options>
          {EXTRA_OPTIONS.map(
            ({ option, description, photo, price, galleryPhotos, id }) => {
              const isAdded = extraOptions.includes(id);
              const isDescShowed = showedDescID.includes(id);

              return (
                <Option key={id}>
                  <OptionImg src={photo} />
                  <div className="flex-col-gap">
                    <OptionTitle onClick={toggleDescriptions(id)}>
                      <h4>{option}</h4>
                      <OptionArrow $isShown={isDescShowed} />
                    </OptionTitle>
                    <OptionDescription $isDescShowed={isDescShowed}>
                      {description}
                    </OptionDescription>
                  </div>
                  <OptionButton>
                    <Button onClick={toggleOption(id)} sub={isAdded}>
                      {isAdded ? "Добавлено" : "Добавить"}
                    </Button>
                  </OptionButton>
                  <Gallery>
                    <FirstPhoto src={photo} />
                    {galleryPhotos.map((photo) => (
                      <GalleryPhoto src={photo} key={photo} />
                    ))}
                  </Gallery>
                  <OptionPrice>{price.toLocaleString()} руб.</OptionPrice>
                </Option>
              );
            },
          )}
        </Options>
      )}
    </div>
  );
};
