import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-lg-5 p-3">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Algo and strategy platform</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Options trading platform</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Asset management</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Bonds trading platform</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{ width: "45%" }} className="img-fluid" />
            <p className="text-small text-muted">Insurance</p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", minWidth: "200px", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;