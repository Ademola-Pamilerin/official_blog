const mongoose = require("mongoose")

const dbConnection = async () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: false,
        useNewUrlParser: true,
    }, (err) => {
        if (err) {
            console.log(err);
            throw new Error(err.message)
        }
        console.log("connected to database")
    })
}
export default dbConnection