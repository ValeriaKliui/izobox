import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Button } from "@shared/Button";
import { useState } from "react";
import { Colors } from "./Colors";
import {
    IzoboxContainer,
    Gallery,
    Properties,
    Label,
    FlexGap,
    Price,
    PriceWithoutDiscount,
    Discount,
} from "./styled";
import { Windows } from "./Windows";

export const IzoboxSelection = () => {
    const { izobox, chooseIzobox } = useIzobox();
    const [isWindow, setIsWindow] = useState<"with" | "without">("with");

    const chooseWindow = (windowStr: "with" | "without") => () =>
        setIsWindow(windowStr);

    const price = izobox.price;
    const discount = 25;
    const priceWithoutDiscount = izobox.price / (1 - discount / 100);

    return (
        <div className="wrapper">
            <h3>
                IzoBox <span className="primary-text">{izobox.type}</span>
            </h3>
            <IzoboxContainer>
                <Gallery>
                    <img
                        src={
                            izobox.type === IzoboxType.basic && isWindow === "without"
                                ? izobox.photoWithoutWindow
                                : izobox.photo
                        }
                    />
                </Gallery>
                <Properties>
                    <FlexGap>
                        {Object.values(IzoboxType).map((izoboxType) => (
                            <Button
                                choosen={izobox.type === izoboxType}
                                onClick={chooseIzobox(izoboxType)}
                                key={izoboxType}
                            >
                                {izoboxType}
                            </Button>
                        ))}
                    </FlexGap>
                    {izobox.type === IzoboxType.basic && (
                        <>
                            <Windows chooseWindow={chooseWindow} isWindow={isWindow} />
                            <Colors colors={izobox.colorsInside} title="Цвет внутри" />{" "}
                            <Colors colors={izobox.colorsOutside} title="Цвет снаружи" />
                            <p className="bold underline">Все цвета</p>
                            <Price>
                                <h4>{price.toLocaleString()} руб.</h4>
                                <Discount className="bold">-{discount}%</Discount>
                                <PriceWithoutDiscount>{priceWithoutDiscount.toLocaleString()} руб.</PriceWithoutDiscount>
                            </Price>
                        </>
                    )}

                    <FlexGap>
                        <Button>Купить</Button>
                        <Button sub>В кредит</Button>
                    </FlexGap>
                </Properties>
            </IzoboxContainer>
        </div>
    );
};
