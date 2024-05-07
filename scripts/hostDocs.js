import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(process.cwd(), './docs')));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});