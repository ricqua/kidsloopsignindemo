import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <React.Fragment>
      <div className="popup">
        <div className="popup-inner">
          <h1>{props.contentID}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            eius. Hic nisi assumenda, nemo architecto libero corrupti natus
            ipsum alias omnis blanditiis debitis iusto corporis eveniet officiis
            saepe vero nobis suscipit minus? Impedit, repellendus. Ex voluptatem
            sed modi optio placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            labore. Itaque at quos, amet ab illum cumque expedita autem sed qui
            ratione alias! Dolor placeat at voluptas accusamus, veniam
            repellendus eveniet qui amet modi, architecto consequatur dolore,
            quas sapiente perspiciatis. Provident repellat, pariatur eligendi
            dolores, est deleniti dolor odio mollitia blanditiis et voluptate
            impedit. Voluptas aut quam pariatur suscipit facilis vel? Ipsa dicta
            corrupti velit impedit corporis voluptatibus rerum quidem aspernatur
            quaerat assumenda totam fugit quas dolorum beatae delectus vitae,
            eum rem? Dolor et est omnis inventore incidunt dolorum magni nobis
            ducimus! Ipsam possimus laborum animi, sequi ducimus eum
            repudiandae.
          </p>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
}

export default Popup;
