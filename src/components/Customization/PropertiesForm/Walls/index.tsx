import { WALLS } from "@constants/index";
import { Range } from "@shared/Range";

import { InsideContainer } from "./styled";

export const Walls = () => (
  <div className="flex-col-gap">
    {WALLS.map(({ title, dimensions }) => (
      <InsideContainer key={title}>
        <p className="bold">{title}</p>
        <div>
          {dimensions.map(({ initValue, name }) => (
            <Range initValue={initValue} name={name} key={name} />
          ))}
        </div>
      </InsideContainer>
    ))}
  </div>
);
