const randomString = () => Math.random().toString(36).slice(2);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));