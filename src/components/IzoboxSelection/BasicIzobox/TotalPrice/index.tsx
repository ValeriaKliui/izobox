import { useIzobox } from "@hooks/useIzobox";

import { Discount, Price, PriceWithoutDiscount } from "./styled";

export const TotalPrice = () => {
  const { izobox } = useIzobox();
  const price = izobox.price;
  const discount = 25;
  const priceWithoutDiscount = izobox.price / (1 - discount / 100);

  return (
    <Price>
      <h4>{price.toLocaleString()} руб.</h4>
      <Discount className="bold">-{discount}%</Discount>
      <PriceWithoutDiscount>
        {priceWithoutDiscount.toLocaleString()} руб.
      </PriceWithoutDiscount>
    </Price>
  );
};
