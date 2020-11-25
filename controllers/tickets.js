const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
    showAll,
    new: newTicket,
    create
}

function create(req,res){
    Ticket.create(req.body, function(err,ticket){
        ticket.save(function(err){
            res.redirect('/tickets/new')
        })
    })
}

function newTicket(req,res){
    res.render('tickets/new');
}

function showAll(req,res){
    Flight.findById(req.params.id, function(err,flight){
         Ticket.find({flight: flight._id}, function(err,tickets){
             res.render(`flights/show`, { flight, tickets})
         })
    })
}
