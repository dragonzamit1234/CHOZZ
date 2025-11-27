// script.js
// Central place for shared JS functions for the demo site.

// Demo user store (client-side only — NOT secure)
const demoUsers = [
  { username: 'admin', password: 'password123' },
  { username: 'guest', password: 'guest' },
];

// authenticate(username, password) -> boolean
function authenticate(u, p) {
  if (!u || !p) return false;
  for (const user of demoUsers) {
    if (user.username === u && user.password === p) return true;
  }
  return false;
}

// Optional: call this to add a user (for demo)
function addDemoUser(username, password) {
  demoUsers.push({ username, password });
}

// Expose to window for index.html inline script
window.authenticate = authenticate;
window.addDemoUser = addDemoUser;
