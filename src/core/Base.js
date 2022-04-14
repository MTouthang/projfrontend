import React from "react";

function Base({
  title = "My title",
  description = "My description",
  className = "text-white p-4",
  children,
}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron  text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children} </div>
      </div>

      <footer className="footer  mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4> if you got any question, feel free to reach out</h4>
          <button className="btn btn-warning btn-lg">Contact us </button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing <span className="text-white">MERN</span> Bootcamp
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Base;