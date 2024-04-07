import { Subtext } from "@components/Footer/styled";
import { IZOBOXES } from "@constants/index";
import { Fragment } from "react/jsx-runtime";

import { Container, Dimensions, StyledLi, Title } from "./styled";

export const BasicDescription = () => (
    <Container className="wrapper">
        <div>
            <Title>Габариты</Title>
            <Dimensions>
                {IZOBOXES.basic.dimensions.map((dimension, index) => (
                    <Fragment key={index}>
                        <Subtext>{dimension[0]}</Subtext>
                        <p>{dimension[1]}</p>
                    </Fragment>
                ))}
            </Dimensions>
        </div>
        <div>
            <h5>Комплектация</h5>
            <ul>
                {IZOBOXES.basic.equipment.map((equipment) => (
                    <StyledLi key={equipment}>
                        <p>{equipment}</p>
                    </StyledLi>
                ))}
            </ul>
        </div>
        <div>
            <h5>Особенности IzoRoom™ Standart</h5>
            <ul>
                {IZOBOXES.basic.features.map((feature) => (
                    <StyledLi key={feature}>
                        <p>{feature}</p>
                    </StyledLi>
                ))}
            </ul>
        </div>
    </Container>
);
