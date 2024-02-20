const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPasswordWithSecret(password, secret) {
    // Concatenate the password and the secret key
    const combined = password + secret;

    try {
        // Hash the combined string
        const hash = await bcrypt.hash(combined, saltRounds);
        console.log('Hashed with secret:', hash);
        return hash;
    } catch (error) {
        console.error('Hashing error:', error);
    }
}

const password = 'examplePassword';
const AUTH_SECRET = 'Cj+2yx0+NwQNCNWeNtfR5LEkiVmMSz3V7FYEHrFYq2o=';
hashPasswordWithSecret(password, AUTH_SECRET);


