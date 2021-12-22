// import React, { useEffect, useState } from "react";
import {Button, Table} from 'react-bootstrap';



export default function UserRecordTable(props){
    console.log(props.tableData);

    return(
        <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
            <Button>Edit</Button>
            <Button>Delete</Button>
            </td>

          </tr>
        </tbody>
      </Table>
        </div>
    )

}