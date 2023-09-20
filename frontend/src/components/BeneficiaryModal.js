import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const BeneficiaryModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fundTransfer");
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Beneficiary added successfully!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You can now tranfer the funds.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Fund Transfer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BeneficiaryModal;
