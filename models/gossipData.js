const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gossipDataSchema = new Schema (
    {
        gossipText: {
            type: String,
            min: 1,
            required: true
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model('gossipData', gossipDataSchema);

