const mongoose = require('mongoose');
const Newdate = mongoose.Schema;
const newdate = new Newdate({
    day: Date,
    infected: Number,
    died: Number,
});
module.exports = mongoose.model('newdate', newdate);
