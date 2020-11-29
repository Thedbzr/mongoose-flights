const Ticket = require('../models/ticket');
module.exports = {
    new: newTicket,
    create
}


function newTicket(req, res) {
    res.render('tickets/new', {
        id: req.params.id
    });
}

function create(req, res) {
    //when using a model . create method itll auto save in the database!
    req.body.flight = req.params.id;
    console.log(req.body);
    Ticket.create(req.body, function (err, ticket) {
        if(err) console.log(err);
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
    })
}


