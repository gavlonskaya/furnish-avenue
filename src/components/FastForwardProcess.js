import React from "react";
import fastForwardProcess from "../img/fast-forward-process.jpg";
import { MdPayments } from "react-icons/md";
import { MdDescription } from "react-icons/md";
export default function FastForwardProcess() {
  return (
    <div className="fast-forward-process">
      <img src={fastForwardProcess} className="img" />
      <div className="content">
        <div className="right-content">
          <h1 className="fast-forward-process__title">Fast forward process</h1>
          <p className="fast-forward-process__description">
            Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet
            mi arcu praesent nec felis nisl.
          </p>
          <div className="container">
            <div className="container-card">
              <div className="icon">
                <MdPayments />
              </div>
              <h2 className="container-card__title">Affordable prices</h2>
              <p className="container-card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="container-card">
              <div className="icon">
                <MdDescription />
              </div>
              <h2 className="container-card__title">Less paper work</h2>
              <p className="container-card__description">
                Curabitur porta luctus semper donec eget lobortis leo ac finibus
                nisi.
              </p>
            </div>
          </div>
          <div className="container-button">
            <button className="explore-properties">Explore properties</button>
            <button className="contact-agent">Contact agent</button>
          </div>
        </div>
      </div>
    </div>
  );
}
