const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const results = await Promise.all(resultingPromises);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var DELIM_SIZE = 4;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};