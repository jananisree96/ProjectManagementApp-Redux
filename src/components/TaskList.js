import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./updateTask";

const TaskList = () => {
  const updateTask = () => {
    console.log("updateTask");
    setModalShow(true);
  };
  const deleteTask = () => {
    console.log("deleteTask");
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              {" "}
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => updateTask()}
              >
                <i className="bi bi-pencil"></i>
              </Button>{" "}
              <Button variant="primary">
                <i className="bi bi-x-circle" onClick={() => deleteTask()}></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskList;
