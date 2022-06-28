const mongoose = require('mongoose');
const uri = "mongodb+srv://zyknafein:ob23S05uKDsCNH6v@cluster0.ys0hm" +
    ".mongodb.net/sharemycode?authSource=admin&replicaSet=atlas-z1gwwk-shard-0&readPreference=primary&ssl=true";


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", (err, suc) => {
    console.log('connected to database');
})

module.exports = connection;
