import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ForgotPasswordModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Password changed successfully!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You can now login with your new password.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPasswordModal;
