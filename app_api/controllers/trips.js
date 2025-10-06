const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});

        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: "No trips found" });
        }

        res.status(200).json(trips);
    } catch (err) {
        console.error('Error retrieving trips:', err);
        res.status(500).json({
            message: "Error retrieving trips",
            error: err.message
        });
    }
};

// GET: /trips/:tripCode - returns a single trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });

        if (!trip) {
            return res.status(404).json({ message: "Trip not found with code: " + req.params.tripCode });
        }

        res.status(200).json(trip);
    } catch (err) {
        console.error('Error retrieving trip:', err);
        res.status(500).json({
            message: "Error retrieving trip",
            error: err.message
        });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
