import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { FlexGap } from "../styled";
import { Label } from "./styled";

export const Windows = ({ chooseWindow, isWindow }) => {

    const { izobox } = useIzobox();
    return <FlexGap>
        {izobox.type === IzoboxType.basic &&
            izobox.windows &&
            Object.entries(izobox.windows).map((window) => {
                const [value, text] = window;
                return (
                    <Label key={value}>
                        <input
                            type="radio"
                            value={value}
                            checked={value === isWindow}
                            onChange={chooseWindow(value)}
                        />
                        {text}
                    </Label>
                );
            })}
    </FlexGap>
}