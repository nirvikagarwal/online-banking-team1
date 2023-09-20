import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const FundTransferModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/transactions");
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Fund Transfer was successful!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Amount has been transfered to the beneficiary.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          View Transactions
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FundTransferModal;
