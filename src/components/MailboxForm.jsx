import React from "react";

const MailboxForm = (props) => {
  return (
    <div className="container">
      <h1>MailboxForm</h1>
      <form onSubmit={props.addBox}>
        <div className="row">
          <label className="col-md-3" htmlFor="boxholder">
            Enter a Boxholder:
          </label>
          {props.name}
          <input
            className="col-md-9"
            id="name"
            name="name"
            onChange={props.handleNameChange}
            value={props.name}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="selection">Select a Box Size: </label>
          {props.selection}
          <select
            id="selection"
            className="col-md-12"
            value={props.selection}
            onChange={props.handleSelectionChange}
          >
            <option name="small" value="small">
              Small
            </option>
            <option name="small" value="medium">
              Medium
            </option>
            <option name="small" value="large">
              Large
            </option>
          </select>
        </div>

        <div className="row">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default MailboxForm;
