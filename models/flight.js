const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX','SAN']
    },
    arrival: {
        type: Date
    }
})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'SouthWest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: {
            min:10,
            max:9999
        }
    },
    departs: {
        type: Date,
       //COME BACK TO THIS
        default: function(){
            return new Date().getFullYear() + 1;
        }
    },
    destinations: {
    type: [destinationSchema]
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);