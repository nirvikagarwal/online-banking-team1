import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const OpenAccountModal = ({ show, handleClose, user }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "20px" }}>USER PROFILE</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ color: "grey" }}>
        <h6>User ID: {user[0].userId}</h6>
        <h6>
          Name: {user[0].firstName} {user[0].middleName} {user[0].lastName}
        </h6>
        <h6>Email: {user[0].email}</h6>
        <h6>Mobile:{user[0].mobile}</h6>
        <h6>PAN: {user[0].pan}</h6>
        <h6>DOB: {user[0].dob}</h6>
        <h6>Address: {user[0].address}</h6>
        <h6></h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OpenAccountModal;
