const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
    common_name: {
        type: String,
        required: false,
    },
    scientific_name: {
        type: String,
        required: true,
    },
    watering: {
        type: String,
        required: true,
    },
    sunlight: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    wateringHistory: [
        {
            date: {
                type: Date,
                default: Date.now()
            },
            watered: { type: Boolean }
        }
    ]
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;