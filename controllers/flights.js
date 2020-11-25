const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req,res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights });
    });
}

function show(req,res){
    Flight.findById(req.params.id, function(err,flight){
        res.render('flights/show', { flight });
    })
}

function create (req ,res) {
    const flight = new Flight(req.body);
    flight.save(function(err){
        //one way to handle errors
        if(err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    })
}

function newFlight(req,res) {
    res.render('flights/new');
}