export const formatUserName = (
  userId: string,
): string => {
  if (!userId) return '';

  const firstThreeLetters = userId.slice(0, 3);
  const lastThreeLetters = userId.slice(userId.length - 3, userId.length);

  return `${firstThreeLetters}...${lastThreeLetters}`;
};

export const formatBalance = (
  balance: number | string,
  decimals = 6,
): string => {
  if (!balance) return `${0}`;

  const dividedValue = Number(balance) / (1000 * 1000);

  return dividedValue.toFixed(decimals);
};