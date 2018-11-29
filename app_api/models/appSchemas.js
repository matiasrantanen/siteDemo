const mongoose = require('mongoose');

const stanleycupSchema = new mongoose.Schema({year:String, team:String});
const topplayersSchema = new mongoose.Schema({season:String, player:String, team:String, score:String});

mongoose.model('stanleycup', stanleycupSchema, 'stanleycup');
mongoose.model('topplayers', topplayersSchema, 'topplayers');