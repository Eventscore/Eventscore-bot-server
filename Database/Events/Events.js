// var db = require('../config');
// var mongoose = require('mongoose');

// var eventsSchema = new mongoose.Schema({
//   name: {type: String},
//   start: Date,
//   created: Date,
//   updated: Date,
//   artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artists', unique: true}],
//   score: Number,
//   location: {
//     type: {
//       type: 'String',
//       required: true,
//       enum: ['Point', 'LineString', 'Polygon'],
//       default: 'Point'
//     },
//     coordinates: [Number]
//   },
//   venue: String,
//   city: String,
//   state: String,
//   sgticketsurl: String,
//   sgscore: Number,
//   venueScore: Number,
//   socialScore: Number
//   // venue: {
//   //   name: String,
//   //   score: Number
//   // },
// });

// var Events = mongoose.model('Events', eventsSchema);
// Events.collection.ensureIndex({'location': '2dsphere'}, function(err, res) {
//   if (err) {
//     return console.log('error');
//   } else {
//     console.log('ensureIndex successful', res);
//   }
// });

// var test = Events.find({ name: 'Iron Maiden with Ghost'});

// console.log('------------test------------------', test);

// module.exports = Events;

