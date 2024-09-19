const convertMinutes = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours} Часов и ${remainingMinutes} минут`;
};

console.log(convertMinutes(130));
