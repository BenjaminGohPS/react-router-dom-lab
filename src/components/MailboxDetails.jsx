import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = () => {
  const params = useParams();
  return <h1>Mailbox {params.mailboxId}</h1>;
};

export default MailboxDetails;
