require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const { PORT, MONGO_DB } = require('./config');

mongoose.connect(MONGO_DB);

const app = express();

app.use(cors({
  credentials: true,
  origin: 'https://sunder.mesto.nomoredomainsmonster.ru',
}));

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(requestLogger);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
