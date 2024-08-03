import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import dotenv from 'dotenv';
import morgan from 'morgan';
import session from 'express-session';
import compression from 'compression';
import home from './routes/home/index.js';
import admin from './routes/admin/index.js';
import api from './routes/api/index.js';
import connectToDb from './db/index.js';
import cors from 'cors';


dotenv.config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, 'bookshelf.log');

const PORT = process.env.DB_PORT || 6000;
app.use(compression());
app.use('/assets', express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public', 'build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(
  '/admin',
  session({
    name: 'sessId',
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: app.get('env') === 'production' ? true : false,
      httpOnly: true,
      maxAge: 18000000, // 5 hours
    },
  })
);
app.use(morgan(':method - :url - :date - :response-time ms'));
app.use(
  morgan(':method - :url - :date - :response-time ms', {
    stream: createWriteStream(logFile, { flags: 'a' }),
  })
);

app.set('view engine', 'pug');

app.use('/admin', admin);
app.use('/api', api);
app.use('/', home);

// app.use(cors());
// //connect backend with frontend
// const corsOptions = {
//   origin: `http://localhost:3000/`,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));




console.log(process.env.VARIABLE_NAME);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
Promise.all([connectToDb()])
  .then(() => app.listen(PORT, () => console.log(`Bookshelf is running on port ${PORT}`)))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
