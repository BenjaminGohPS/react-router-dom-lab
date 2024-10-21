import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  // src/components/MailboxDetails.jsx

  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const params = useParams();
  return (
    <div className="mail-box">
      <h3>Mailbox {params.mailboxId}</h3>
      <h4>Details</h4>
      <p>Boxholder: {props.name}</p>
      <p>Box Size: {props.size}</p>
    </div>
  );
};

export default MailboxDetails;

/*
<h3>Mailbox {params.mailBoxId}</h3>
       {props.mailboxId}
      <h3>Mailbox {params.mailboxId}</h3>
      <h4>Details</h4>
      <p>Boxholder: {props.name}</p>
      <p>Box Size: {props.size}</p>
*/
