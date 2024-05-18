const dotenv = require('dotenv');
const path = require('path');

// Specify the path to the .env file
const envPath = path.join(__dirname, 'server', '.env');
dotenv.config({ path: envPath });

console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('PORT:', process.env.PORT);
