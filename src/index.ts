import { computeNumberOfPreorders } from './functions/computeNumberOfPreorders';
import 'dotenv/config';

const N = Number(process.env.N) || 0;

const numberOfPreorders = computeNumberOfPreorders(N);

console.log(numberOfPreorders);
