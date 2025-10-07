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

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q) {
        // Database returned no data
        return res
            .status(400)
            .json(q);
    } else {
        // Return new trip
        return res
            .status(201)
            .json(q);
    }
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Trip
        .findOneAndUpdate(
            { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if(!q) {
        // Database returned no data
        return res
            .status(400)
            .json(q);
    } else {
        // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
