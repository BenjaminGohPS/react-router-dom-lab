import React from "react";
import { Link } from "react-router-dom";
import MailboxDetails from "./MailboxDetails";

const MailboxList = (props) => {
  return (
    <div>
      <h1>MailboxList</h1>

      {props.mailboxes.map((item, idx) => {
        return (
          <ul>
            <li>
              <Link to="/mailbox/:mailboxId">
                {/* <MailboxDetails
                  name={props.name}
                  size={props.size}
                  mailboxId={props.mailboxId}
                /> */}
                Mail box {idx + 1}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default MailboxList;

/**
  let content = [];
  for (let i = 0; i < props.mailboxId; i++) {
    // content.push(props.mailboxes);
 
*/

/*
div>
      <h1>MailboxList</h1>
      <ul>
        <li>{/* <Link to={"/mailbox/" + i}>MAILBOX {i}</Link> */
// }</li>
//         <li>
//           <Link to={"/mailbox/:mailboxId"}>
//             {/* <MailboxDetails
//                 name={props.name}
//                 size={props.size}
//                 mailboxId={props.mailboxId}
//               /> */}
//             Mail box {(props.mailboxId+1)}
//           </Link>
//         </li>
//       </ul>
//     </div>
// */
