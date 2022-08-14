import React from "react";

function PhotoPreview({ photo, index, handleDelete }) {
    console.log(index);
  return (
    <div className="Photo-preview">
      <div className="image-box">
        <img src={photo} alt="preview" className="Photo-image" />
      </div>
      <span className="Photo-delete material-icons" onClick={() => handleDelete(photo)}>highlight_off</span>
    </div>
  );
}

export default PhotoPreview;
