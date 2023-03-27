import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddPostModal.css";
import { VscDiscard } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";

const AddPostModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <span>Discard</span>{" "}
            <span>
              <VscDiscard />
            </span>
          </Button>
          <Button variant="success" onClick={handleClose}>
            <span>Add Post</span>{" "}
            <span>
              <AiOutlineFileAdd />
            </span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPostModal;
