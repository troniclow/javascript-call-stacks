var arr2 = arr1.reverse();
console.log("1 && 2 = "+(1 && 2));
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();