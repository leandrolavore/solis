export const calculateAvgNameLength = (list) => {
  if (!list?.length) return 0;

  const userNamesLength = list.reduce((acc, { Username }) => {
    return acc + Username?.length;
  }, 0);

  return Math.floor(userNamesLength / list.length);
};
