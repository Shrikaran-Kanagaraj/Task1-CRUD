import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button, Table } from 'react-bootstrap';

import Toaster from "./Toaster";

export default function UserRecordModule(props) {

    const [data, setData] = useState(null);
    const [deleteID, setDeleteID] = useState(null);
    const [itemDeleted,setItemDeleted] = useState(false);

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");


    const AddUser = () => {
        if (name != "" && username != "" && email != "") {
            let newData = data;
            let objData = {
                name: name,
                username: username,
                email: email

            }

            console.log(objData);
            newData.push(objData)
            // console.log("NEW DATAA: ", newData);
            setData(newData);
            setName("");
            setUserName("");
            setEmail("");

        }
        else {
            console.log("error");
        }

    }

    const deleteUser = (idx) => {
        console.log(idx);
        if (data) {
            setItemDeleted(true);
            let newData = data;

            newData.splice(idx, 1)
            console.log("NEW DATA: ", newData);
            setData(newData);
            setItemDeleted(false);
            setName("");
            setUserName("");
            setEmail("");

        }

    }

    // useEffect(() => {
    //     if (data) {
    //         let newData = data;

    //         newData.splice(deleteID, 1)
    //         console.log("NEW DATA: ", newData);
    //         setData(newData);
    //         // setDeleteID(null)
    //     }
    // }, [deleteID])





    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>

            <Container className="py-4 my-3">
                <Row>
                    {
                        data
                            ?
                            (
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>UserName</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((ele, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{ele.name}</td>
                                                            <td>{ele.username}</td>
                                                            <td>{ele.email}</td>
                                                            <td>
                                                                <Button className="px-4 mx-3">Edit</Button>

                                                                <Button className="px-3 mx-3" onClick={() => deleteUser(idx)} >Delete</Button>
                                                            </td>

                                                        </tr>


                                                    )
                                                })
                                            }
                                            <tr>
                                                <td>
                                                    <input type="text" placeholder="Name" required="required" onChange={e => setName(e.target.value)} value={name} />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="UserName" required="required" onChange={e => setUserName(e.target.value)} value={username} />
                                                </td>
                                                <td>
                                                    <input type="email" placeholder="Email" required="required" onChange={e => setEmail(e.target.value)} value={email} />
                                                </td>
                                                <td>
                                                    <Button onClick={AddUser} >Add User</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            )
                            :
                            (<></>)
                    }
                </Row>
            </Container>
        </div>
    )
}