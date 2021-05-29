import React from "react";
import Modal from "react-modal";
import "./popup.component.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

export function CustomPopup(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={props.settings.open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Try Again"
      >
        <h2 className="popup-title">{props.settings.message}</h2>
        <button className="popup-close-button" onClick={props.closePopup}>
          close
        </button>
      </Modal>
    </div>
  );
}
