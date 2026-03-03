import React from "react";

//destructuring: directly put values ex:imageUrl etc etc
function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-lg-5 p-3">
        <div className="col-lg-6 col-12 text-center mb-4">
          <img src={imageURL} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-12 p-lg-5 p-3">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href={tryDemo} className="text-decoration-none">Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;