import React from "react";

const LetterForm = (props) => {
  return (
    <div className="container">
      <h1>New Letter</h1>
      <form onSubmit={console.log("New Letter")}>
        <div className="row">
          <label htmlFor="mailbox">Select a Mailbox</label>
          <select>
            {props.mailboxes.map((item, idx) => {
              return (
                <option key={idx} id={item.id} value={item.id}>
                  {item.id}
                </option>
              );
            })}
          </select>
        </div>

        <div className="row">
          <label htmlFor="recipient">Recipient</label>
          <select>
            {props.mailboxes.map((item, idx) => {
              return (
                <option key={idx} id={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="row">
          <label htmlFor="message">Message</label>
          <textarea placeholder="Message"></textarea>
        </div>
        <br></br>
        <div className="row">
          <span></span>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default LetterForm;
