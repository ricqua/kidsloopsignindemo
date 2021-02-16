import React, { useState } from "react";
import "./Footer.css";
import Popup from "./Popup";
import { Icon, InlineIcon } from "@iconify/react";
import roundBrightness7 from "@iconify-icons/ic/round-brightness-7";

export default function Footer() {
  // const [helpPopup, setHelpPopup] = useState(false);
  // const [privacyPopup, setPrivacyPopup] = useState(false);
  // const [termsPopup, setTermsPopup] = useState(false);
  const [popup, setPopup] = useState({ contentID: "", status: false });

  function handleClick(e) {
    setPopup({ contentID: e.target.id, status: true });
  }

  return (
    <React.Fragment>
      <div className="footerComponent">
        <div className="selectLanguage">
          <div className="darkMode">
            <Icon
              icon={roundBrightness7}
              width="20px"
              alt="Toggle dark mode"
              color="#444"
            />
            <span className="darkModeToolTipText">Toggle light/dark mode</span>
          </div>

          <select id="selectLanguage">
            <option value="English">English</option>
            <option value="Korean">한국어</option>
          </select>
        </div>
        <div className="disclaimers">
          <a id="Help" onClick={handleClick}>
            Help
          </a>
          <a id="Privacy" onClick={handleClick}>
            Privacy
          </a>
          <a id="Terms" onClick={handleClick}>
            Terms
          </a>
          <Popup
            trigger={popup.status}
            setTrigger={setPopup}
            contentID={popup.contentID}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
