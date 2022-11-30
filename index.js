import fsp from 'fs/promises';
import fileDataType from './function.js';

const content = await fsp.readFile('./data.csv', 'utf-8');



await fileDataType(content); 