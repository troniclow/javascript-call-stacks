const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const merge = Object.assign({}, obj1, obj2);
const goToTop = () => window.scrollTo(0, 0);