const mongoose = require('mongoose');

// connect Mongoose to MongoDB
const dbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/chype';

mongoose.connect(dbUrl, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
});