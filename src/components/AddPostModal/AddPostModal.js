import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddPostModal.css";
import { VscDiscard } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";

const AddPostModal = ({ show, handleClose }) => {
  const [image, setImage] = useState(null);
  const [previews, setPreviews] = useState(null);
  const addImageAction = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };

  useEffect(() => {
    if (!image) {
      return;
    }

    let temp = [];
    for (let i = 0; i < image.length; i++) {
      temp.push(URL.createObjectURL(image[i]));
    }
    let objectUrl = temp;
    setPreviews(objectUrl);

    //free memory
    for (let i = 0; i < objectUrl.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrl[i]);
      };
    }
  }, [image]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="add-post-form-container">
            <div className="content-title">
              <label htmlFor="for">Title of the post</label>
              <input type="text" placeholder="Title" required />
            </div>
            <div className="content-desc">
              <label htmlFor="for">Desc</label>
              <div
                contentEditable="true"
                data-placeholder="What's on your mind..."
                className="content-desc-input"
              >
                {previews &&
                  previews.map((pic) => {
                    return (
                      <img className="content-desc-images" src={pic} alt="" />
                    );
                  })}
              </div>
            </div>
            <div className="add-image-btn">
              <label htmlFor="image-upload">
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  id="image-upload"
                  onChange={addImageAction}
                />
                <span>Add Image</span>
                <span>
                  <IoMdPhotos />
                </span>{" "}
              </label>
            </div>
          </form>
        </Modal.Body>
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
