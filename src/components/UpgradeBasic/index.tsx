import { BigText } from "@shared/Typography/Typography";
import { Arrow, Option, TitleContainer } from "./styled";
import { useState } from "react";
import { EXTRA_OPTIONS } from "@constants/index";
import { Button } from "@shared/Button";

export const UpgradeBasic = () => {
    const [isShown, setIsShown] = useState(false);

    const toggleUpgrade = () => setIsShown(prev => !prev)

    return (
        <div className="wrapper">
            <TitleContainer onClick={toggleUpgrade}>
                <h3 className="primary-text">Прокачай свой IzoBox</h3>
                <Arrow $isShown={isShown} />
            </TitleContainer>
            <BigText>Добавить дополнительные опции</BigText>
            {isShown &&
                <div>
                    {EXTRA_OPTIONS.map(({ option, description, photo, price, galleryPhotos }) => <Option>
                        <h4>
                            {option}
                        </h4>
                        <p>{description}</p>
                        <h4>
                            {price.toLocaleString()} руб.
                        </h4>
                        <Button>
                            Добавить
                        </Button>
                    </Option>)}
                </div>}
        </div>
    );
}
