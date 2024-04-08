import { EXTRA_OPTIONS } from "@constants/index";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { Button } from "@shared/Button";
import { BigText } from "@shared/Typography/Typography";
import {
  addExtraOption,
  removeExtraOption,
  selectExtraOptions,
} from "@store/izobox/basicIzobox";
import { useState } from "react";

import {
  Arrow,
  Gallery,
  GalleryPhoto,
  Option,
  Options,
  TextContainer,
  TitleContainer,
} from "./styled";

export const UpgradeBasic = () => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useAppDispatch();
  const extraOptions = useAppSelector(selectExtraOptions);
  const toggleUpgrade = () => setIsShown((prev) => !prev);

  const toggleOption = (optionID: number) => {
    const isAdded = extraOptions.includes(optionID);
    isAdded
      ? dispatch(removeExtraOption(optionID))
      : dispatch(addExtraOption(optionID));
  };

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

              return (
                <Option key={id}>
                  <img src={photo} />
                  <TextContainer>
                    <h4>{option}</h4>
                    <p>{description}</p>
                  </TextContainer>
                  <Button onClick={() => toggleOption(id)}>
                    {isAdded ? "Добавлено" : "Добавить"}
                  </Button>
                  <Gallery>
                    {galleryPhotos.map((photo) => (
                      <GalleryPhoto src={photo} key={photo} />
                    ))}
                  </Gallery>
                  <h4>{price.toLocaleString()} руб.</h4>
                </Option>
              );
            },
          )}
        </Options>
      )}
    </div>
  );
};
