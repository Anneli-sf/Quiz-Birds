const getRandomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getTime = (time) => {
  
  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60);

  let formatted = [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  return formatted;
};

export { getRandomValue, getTime };
