import React from "react";
import "./Skeleton.css";

export default function SkeletonUserCard() {
  return (
    <div className="col-sm-12 d-flex justify-content-center mb-3">
      <div className="card skeleton-card" style={{ width: "30rem" }}>
        <div className="card-header skeleton skeleton-text"></div>

        <div className="card-body">
          <div className="row">
            <div className="col">
              <div
                className="skeleton skeleton-text"
                style={{ width: "70%" }}
              ></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="col-3">
              <div className="skeleton skeleton-img"></div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div
                className="skeleton skeleton-text"
                style={{ width: "50%" }}
              ></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: "40%" }}
              ></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
