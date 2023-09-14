import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registration Complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank You for joining us!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Explore More
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
