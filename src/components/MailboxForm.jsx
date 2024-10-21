import React from "react";

const MailboxForm = (props) => {
  return (
    <div className="container">
      <h1>MailboxForm</h1>
      <form onSubmit={console.log()}>
        <div className="row">
          <label className="col-md-3" htmlFor="boxholder">
            boxholder:
          </label>
          <input className="col-md-9" id="boxholder" />
        </div>

        <div className="row">
          <select
            id="selection"
            className="col-md-12"
            value={props.selection}
            onChange={props.handleSelectionChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="row">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default MailboxForm;
