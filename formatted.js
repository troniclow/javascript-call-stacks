var regexp  = new RegExp('{{([^}]+)}}', 'g');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const symbolsPath = path.join(buildOutputPath, 'symbols');
const removeDuplicates = (arr) => [...new Set(arr)];