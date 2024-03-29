//handle routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// const app = express();

// Use user and thought routes
router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);

module.exports = router;