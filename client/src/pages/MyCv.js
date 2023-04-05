// src/pages/MyCv.js
import React from 'react';
import cv from '../assets/mon_cv.pdf';

const MyCv = () => {
  return (
    <div className="MyCv cv-container">
      <iframe src={cv} width="100%" height="600px" title="mon_cv.pdf" />
    </div>
  );
};

export default MyCv;