import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-lg-5 p-3 m-lg-3">
        <div className="col-lg-6 col-12 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-4" />
          <div className="d-flex flex-wrap gap-3">
            <a href="" className="text-white">Track account opening </a>
            <a href="" className="text-white">Track segment activation</a>
            <a href="" className="text-white">Intraday margins</a>
            <a href="" className="text-white">Kite user manual</a>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-3 mt-lg-0 mt-5">
          <h1 className="fs-3 mt-2">Featured</h1>
          <ol>
            <li>
              <a href="" className="text-white">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-white">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;