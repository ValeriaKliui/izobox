import { useIzobox } from "@hooks/useIzobox";
import { FC, useState } from "react";
import { ColorsProps } from "./interfaces";
import { Color, ColorsContainer, Container } from "./styled";

export const Colors: FC<ColorsProps> = ({ colors, title }) => {
    const [choosenColor, setChoosenColor] = useState(colors[0]);

    return (
        <Container>
            <p className="semibold">{title
            }</p>
            <ColorsContainer>
                {colors.map((color) => (
                    <Color
                        $color={color}
                        $isChoosen={color === choosenColor}
                        onClick={() =>
                            setChoosenColor(color)
                        }
                        key={color}
                    />
                ))}
            </ColorsContainer>
        </Container>
    );
}
