const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
})
const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema)
export default ContactModel