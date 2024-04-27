const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
console.log("1 || 2 = "+(1 || 2));
const uniqueArray = arr => [...new Set(arr)];