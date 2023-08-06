import React from "react";
import "./Dropbox.css";
const Dropbox = ({submit, bool}) => {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files[0]);
    submit(files[0].name)
  };


  return (
    <div className="container">
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="drop-message">
          <div className="upload-icon"></div>
          Drag & Drop files here 
        </div>
      </div>
    </div>
  );
};

export default Dropbox;
