var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");