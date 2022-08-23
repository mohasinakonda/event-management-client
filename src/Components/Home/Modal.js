import React from "react";
import EventRegister from "./EventRegister";

const Modal = ({ eventId }) => {
  return (
    <div>
      <input type="checkbox" id="register-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="register-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <EventRegister eventId={eventId} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
