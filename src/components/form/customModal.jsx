import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../styles/modal.css";
export default function CustomModal({
  show,
  handleClose,
  title,
  children,
  onSave,
}) {
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Vazgeç
        </Button>
        <Button variant="primary" onClick={onSave}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
