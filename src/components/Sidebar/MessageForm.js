import React from "react";

export default function MessageForm() {
  return (
    <div className="d-flex flex-column message-form-container grey-prof-bg">
      <div className="d-flex flex-justify-center mt-1">
        <h6>Send me a message</h6>
      </div>
      <form className="d-flex flex-column m-2 msg-form">
        <label htmlFor="input-subject" className=" grey-text inp-label">
          Subject
        </label>
        <input
          id="input-subject"
          className="transparent-border mb-3 curver-border-sm"
        ></input>

        <label htmlFor="input-message" className=" grey-text inp-label">
          Message
        </label>
        <textarea
          id="input-message"
          className="transparent-border mb-1 curver-border-sm text-area"
        ></textarea>
        <div className="d-flex flex-justify-end">
          <small className="grey-text">1/140</small>
        </div>
        <button className="mt-3 p-1 aqua-dark-bg curver-border-sm white-text font-weight-bold transparent-border">
          Send
        </button>
      </form>
    </div>
  );
}
