import styled from "styled-components";

export const IzoboxContainer = styled.div`
  display: flex;
`;
export const Gallery = styled.div``;
export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const FlexGap = styled.div`
  display: flex;
  gap: 1em;
`;
export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;
`;
export const Discount = styled.p`
  align-self: flex-start;
  color: ${({ theme: { colors } }) => colors.main};
`;

export const PriceWithoutDiscount = styled.p`
  margin-bottom: 0.3em;
  text-decoration: line-through;
`;
