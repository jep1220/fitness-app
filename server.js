const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const htmlRoutes = require('./routes/htmlRoutes');



// connect to Mongo database with Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}
);