const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isEmptyObject = obj => Object.keys(obj).length === 0;