const Flight = require('../models/flight');
const ticket = require('../models/ticket');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}).sort({departs: 1}).exec(function(err, flights) {
        res.render('flights/index', { flights });
    });
}

  

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            console.log(tickets);
            res.render(`flights/show`, { flight, tickets })
        });
    });
}



function newFlight(req, res) {
    res.render('flights/new', {
        id: req.params.id
    });
}
function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        //one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    })
}