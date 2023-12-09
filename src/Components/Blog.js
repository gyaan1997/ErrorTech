import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Blog() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4" style={{ borderRadius: '10px', maxWidth: '400px' }}>
      <div className="card-body text-center">
        <h5 className="card-title">No data available</h5>
        <p className="card-text">Stay tuned to get updates.</p>
      </div>
    </div>
  </div>
);

}

export default Blog;
