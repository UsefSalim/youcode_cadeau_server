require('express-async-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const { verifIsAuthenticated } = require('xelor');
const User = require('./src/models/user.models');

// Routes

const authRoutes = require('./src/routes/auth.routes');
const categoriesRoutes = require('./src/routes/Categorie.routes');
const articlesRoutes = require('./src/routes/Article.routes');

const error = require('./src/middlewares/errors.middleware');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);
module.exports = (app) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  app.get('env') === 'development' &&
    app.use(morgan('combined', { stream: accessLogStream }));

  // Routes

  app.use('/api/auth', authRoutes);
  app.use('/api/categories', categoriesRoutes);
  app.use('/api/articles', articlesRoutes);
  app.use(error);
  app.use('*', (req, res) => verifIsAuthenticated(req, res, User));
};
