const cookkieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Use express middleware to handle cookies (JWT)
server.express.use(cookkieParser());

// decode the jwt so we ca get the user ID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto th req for furture requet to access
    req.userId = userId;
  }
  next();
})

// TODO User express middleware to populate current user
server.express.use(async (req, res, next) => {
  //if they arent logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{id,permissions,email,name}'
  );
  req.user=user;
  next();
})

console.log(process.env.FRONTEND_URL)


server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, deets => {
  console.log(`Server is now running on port http:/localhost:${deets.port}`);
});
