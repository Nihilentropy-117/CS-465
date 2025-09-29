// Bring in the DB connection and the Trip schema
const mongoose = require('mongoose');
require('./db');
require('./travlr');

// Get reference to the Trip model
const Trip = mongoose.model('trips');

// Read the trip data from JSON file
const fs = require('fs');
const path = require('path');

// Read the trip data
const tripData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

// Function to seed the database
const seedDB = async () => {
    try {
        // Clear existing data
        await Trip.deleteMany({});
        console.log('Cleared existing trip data');

        // Insert seed data
        await Trip.insertMany(tripData);
        console.log(`Successfully seeded ${tripData.length} trips to the database`);

        // Close the connection
        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Run the seed function
seedDB();