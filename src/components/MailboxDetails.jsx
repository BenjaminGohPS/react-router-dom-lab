import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  // src/components/MailboxDetails.jsx

  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox.id === Number(mailboxId)
  );
 
// const selectedLetters = props.letters.filter(
//   (letter) => letter.mailboxId === Number(mailboxId)
// );

  // const params = useParams();
  return (
    <div className="mail-box">
      <h3>Mailbox {selectedBox.id}</h3>
      <h4>Details</h4>
      <p>Boxholder: {selectedBox.name}</p>
      <p>Box Size: {selectedBox.size}</p>
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

<div className="mail-box">
<h3>Mailbox {{ mailboxId }.mailboxId}</h3>
 <h4>Details</h4>
<p>Boxholder: {props.name}</p>
<p>Box Size: {props.size}</p>
</div>

<h3>Mailbox {selectedBox.id}</h3>
*/
