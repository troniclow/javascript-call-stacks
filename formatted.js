[foo, bar] = [bar, foo];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const apmRootPath = path.join(repositoryRootPath, 'apm');