import classes from './notification.module.css'
import { createPortal } from 'react-dom'
import { useState } from 'react'


const Notification = (props) => {
    // const [clicked, setClicked] = useState(false)
    const { title, status, message } = props


    let statusClass = classes.pending;

    if (status === "success") {
        statusClass = classes.success
    }
    if (status === "error") {
        statusClass = classes.error
    }
    const cssClass = [classes.notification, statusClass].join(" ")

    // if (clicked) {
    //     return <></>;
    // }

    const portaled = createPortal(<div className={cssClass}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>, document.getElementById("portal"))

    return portaled

}
export default Notification