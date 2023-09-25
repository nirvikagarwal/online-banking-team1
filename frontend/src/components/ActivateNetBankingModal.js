import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ActivateNetBankingModal = ({ show, handleClose, userId }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/activateNetBanking/${userId}`);
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Net Banking not enabled on this account</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please activate netBank on your account!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Activate
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActivateNetBankingModal;
