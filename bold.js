const merge = [...new Set([...a, ...b])];
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const randomBoolean = () => Math.random() >= 0.5;