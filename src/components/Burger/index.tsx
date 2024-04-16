export const Burger = () => (
  <div>
    {Array(3)
      .fill(1)
      .map((_, index) => (
        <span key={index} />
      ))}
  </div>
);
