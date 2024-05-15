const express = require('express');
const mongoose = require('mongoose');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const indexRoutes = require('./routes/itemRoute');

// Connect to MongoDB

// Middleware to parse JSON requests
app.use(express.json());

// Custom middleware for logging
app.use(logger);

// Routes
app.use('/api', indexRoutes);

// Error handling middleware
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://fa20bse008:fa20bse008@cluster0.1sfpbsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => 
    {
        console.log('MongoDB connected')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        
    }
    

)
.catch(err => console.error('MongoDB connection error:', err));




