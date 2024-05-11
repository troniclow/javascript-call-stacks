var regexp  = new RegExp('{{([^}]+)}}', 'g');
const toggleBool = () => (bool = !bool);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';