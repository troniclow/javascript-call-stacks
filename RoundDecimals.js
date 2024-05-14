const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
var arr2 = arr1.reverse();