const fs = require('fs');

fs.writeFileSync('./.env', `SANITY_ID=${process.env.SANITY_DATASET}`);
fs.writeFileSync('./.env', `SANITY_ID=${process.env.SANITY_ID}`);