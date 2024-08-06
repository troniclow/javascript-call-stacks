const merge = [...new Set([...a, ...b])];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());