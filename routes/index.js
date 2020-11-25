const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');


// *** /api Route
router.use('/api', apiRoutes);

// *** /auth Route
router.use('/auth', authRoutes);

module.exports = router;
