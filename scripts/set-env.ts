import { writeFile } from 'fs';
import { argv } from 'yargs';

require('dotenv').config();

const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;

const envConfigFile = `
  export const environment = {
    production: ${isProd},
    API_URL: "${process.env.API_URL}"
  };
  `
writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Config file generated at ${targetPath}`);
});