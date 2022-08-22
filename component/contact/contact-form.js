import classes from './contact-form.module.css'
import { useEffect, useState } from 'react'
import Notification from '../ui/notification'

const ContactForm = props => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("done")
    const [error, setError] = useState("")

    const SubmitData = (event) => {
        const data = { name, email, message }
        event.preventDefault()
        setStatus("pending")
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            if (!res.ok) {
                const result = await res.json()
                throw new Error(result.message)
            }
            return res.json()
        }).then(data => {
            setStatus("success")
            setError(null)
            setName("")
            setEmail("")
            setMessage("")
        }).catch(error => {
            setStatus("error")
            setError(error.message)
        })
    }
    let notfication;
    if (status === "done") {
        notfication = null
    }
    if (status === "error") {
        notfication = <Notification
            status={"error"}
            title={"Error occured"}
            message={error} />
    }
    if (status === "pending") {
        notfication = <Notification
            status={"pending"}
            title={"Loading"}
            message={"Loading ..."} />
    }
    if (status === "success") {
        notfication = <Notification
            status={"success"}
            title={"Successful"}
            message={"Message sent"} />
    }
    useEffect(() => {
        if (status !== "done" || status !== "pending") {
            setTimeout(() => {
                setStatus("done")
            }, 6000)
        }
    }, [status])
    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={SubmitData}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type={"email"}
                        id="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        type={"text"}
                        id="name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea
                    rows={5}
                    required
                    id='message'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)} >
                </textarea>
            </div>
            <div className={classes.action}>
                <button>Send Message</button>
            </div>
        </form>
        {notfication}
    </section >

}
export default ContactForm