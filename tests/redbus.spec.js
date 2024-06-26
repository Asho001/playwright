const fs = require('fs');

// Function to generate a random password of a given length
function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Generate 1000 usernames and passwords
const users = [];
for (let i = 1; i <= 500000; i++) {
    const username = `user${i}`;
    const password = `password@${i}`; // 10-character long passwords
    users.push({ username, password });
}

// Write the usernames and passwords to a CSV file
const csvData = users.map(user => `${user.username},${user.password}`).join('\n');
fs.writeFileSync('users.csv', `username,password\n${csvData}`);

console.log('Users generated and saved to users.csv');
