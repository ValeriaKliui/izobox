import styled from "styled-components";

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
