const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const lastElement = arr => arr[arr.length - 1];