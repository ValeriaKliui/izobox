import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em 0;
`;
export const RangeContainer = styled.div<{
  $index: number;
  $isChoosen: boolean;
  $isOpened: boolean;
}>`
  margin: ${({ $isChoosen, $isOpened }) =>
    $isChoosen && $isOpened ? "0 0 1em 0" : 0};
  grid-row-start: ${({ $index }) => $index};
  height: ${({ $isChoosen, $isOpened }) =>
    $isChoosen && $isOpened ? "100%" : 0};
  visibility: ${({ $isChoosen, $isOpened }) =>
    $isChoosen && $isOpened ? "visible" : "hidden"};
`;
