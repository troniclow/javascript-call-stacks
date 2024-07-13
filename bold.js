const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);