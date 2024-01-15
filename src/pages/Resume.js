import React from 'react';
import pdfFile from "./ResumeF2023.pdf";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <iframe src={pdfFile} width="100%" height="600px" title="Resume"/>
    </div>
  );
}

export default Resume