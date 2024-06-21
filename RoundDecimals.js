const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const removeDuplicates = (arr) => [...new Set(arr)];