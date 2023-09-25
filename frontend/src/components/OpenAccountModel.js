import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const OpenAccountModal = ({ show, handleClose, userId }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/activateNetBanking/${userId}`);
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Account successfully created</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank You for trusting us!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Activate Net Banking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OpenAccountModal;
