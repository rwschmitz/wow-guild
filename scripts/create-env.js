const fs = require('fs');

fs.writeFileSync(`.env.${process.env.NODE_ENV}`, `SANITY_ID=${process.env.SANITY_ID}`);
fs.writeFileSync(`.env.${process.env.NODE_ENV}`, `SANITY_ID=${process.env.SANITY_DATASET}`);