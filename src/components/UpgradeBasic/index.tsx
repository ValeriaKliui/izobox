import { EXTRA_OPTIONS } from "@constants/index";
import { Button } from "@shared/Button";
import { BigText } from "@shared/Typography/Typography";
import { useState } from "react";

import { Arrow, Gallery, GalleryPhoto, Option, Options, TitleContainer } from "./styled";

export const UpgradeBasic = () => {
    const [isShown, setIsShown] = useState(false);

    const toggleUpgrade = () => setIsShown((prev) => !prev);

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
                        ({ option, description, photo, price, galleryPhotos }) => (
                            <Option>
                                <img src={photo} />
                                <div><h4>{option}</h4>
                                    <p>{description}</p></div>
                                <Button>Добавить</Button>
                                <Gallery> {galleryPhotos.map(photo => <GalleryPhoto src={photo} />)}</Gallery>
                                <h4>{price.toLocaleString()} руб.</h4>
                            </Option>
                        ),
                    )}
                </Options>
            )}
        </div>
    );
};
