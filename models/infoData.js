const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoDataSchema = new Schema (
    {
        infoText: {
            type: String,
            min: 1,
            required: true
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model('infoData', infoDataSchema);

