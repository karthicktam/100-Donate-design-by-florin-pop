import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal, faPatreon, fab } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab, faPaypal, faPatreon);

export default function App() {
  return (
    <div className="box">
      <img
        src="https://image.flaticon.com/icons/svg/138/138292.svg"
        alt="coins"
      />
      <h2>Donate</h2>
      <p>
        Support your favorite creator Florin Pop. <br />
        Donate below.
      </p>
      <a
        href="https://paypal.me/florinpop17"
        target="_blank"
        className="btn paypal"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "paypal"]} /> Paypal
      </a>
      <a
        href="https://patreon.com/florinpop17"
        target="_blank"
        className="btn patreon"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "patreon"]} /> Patreon
      </a>
    </div>
  );
}
