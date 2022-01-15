require('express-async-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const hpp = require('hpp');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
// middlewares
const { verifIsAuthenticated } = require('./src/utils/utils');
const error = require('./src/middlewares/errors.middleware');
// routes
const authRoutes = require('./src/routes/auth.routes');
const categoriesRoutes = require('./src/routes/Categorie.routes');
const articlesRoutes = require('./src/routes/Article.routes');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);
module.exports = (app) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
  app.use(xss());
  app.use(mongoSanitize());

  // # HTTP parameter pollation
  app.use(hpp());
  app.use(compression());
  const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5000,
    headers: true,
    message: 'You have exceeded the 5000 requests in 1 hrs limit!',
  });

  app.use('/', limiter);
  app.get('env') === 'development' &&
    app.use(morgan('combined', { stream: accessLogStream }));
  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/categories', categoriesRoutes);
  app.use('/api/articles', articlesRoutes);

  app.use(error);
  app.use('*', verifIsAuthenticated);
};
