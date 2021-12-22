import React,{useState} from "react";
import { Toast, ToastHeader, ToastBody } from 'react-bootstrap';


export default function Toaster(props){
    const [show, setShow] = useState(props.show);

    return(
        <div>
        <Toast onClose={() => setShow(false)} show={show} delay={props.delay} autohide>
                <ToastHeader>
                    <strong className="me-auto">{props.toastTitle}</strong>
                    <small>Now.</small>
                </ToastHeader>
                <ToastBody>{props.toastBody}</ToastBody>
            </Toast>
        </div>

    )
}