import express from 'express';
import weatherRouter from './adapter/in/http/weather/router';

const app = express();
app.use(express.json());
app.use('/api', weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
