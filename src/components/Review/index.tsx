import GirlImg from "@assets/img/girl.png";
import { REVIEWS } from "@constants/index";
import { MediumText, SmallText } from "@shared/Typography/Typography";

import { Author, Avatar, Background, Container, Image } from "./styled";

export const Review = () => (
  <Background>
    <Container className="wrapper">
      {REVIEWS.map(({ review, avatarSrc, job, name }, index) => (
        <>
          {index === 1 && <Image src={GirlImg} />}
          <div key={name}>
            <SmallText>{review} </SmallText>
            <Author>
              <Avatar src={avatarSrc} />
              <div>
                <MediumText className="bold">{name}</MediumText>
                <p>{job}</p>
              </div>
            </Author>
          </div>
        </>
      ))}
    </Container>
  </Background>
);