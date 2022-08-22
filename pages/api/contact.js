
import dbConnection from "../../backend/db";
import ContactModel from "../../backend/model";

const Handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await dbConnection()
            const { email, name, message } = req.body
            if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
                const error = new Error("Invalid Input")
                error.status = 422;
                throw error
            }
            // store in a database 
            const newMessage = { name, email, message }
            const newContact = new ContactModel(newMessage)
            await newContact.save()
            return res.status(201).json({ message: "Thanks for contacting us" })
        } catch (error) {
            return res.status(error.status ? error.status : 422).json({ message: error.message })
        }
    }
    res.status(200).json({ msg: "Ademola" })
}
export default Handler