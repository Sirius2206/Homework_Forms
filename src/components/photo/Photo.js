import React, { useState, useEffect, useRef } from "react";
import PhotoPreview from "./PhotoPreview";
import { nanoid } from "nanoid";

import "./Photo.css";

function Photo() {
  const [urls, setUrls] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener("load", (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener("error", (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  const handleSelect = async (evt) => {
      const files = [...evt.target.files];
      const prom = await Promise.all(files.map(o => fileToDataUrl(o)))
      setUrls(prev => Array.from(new Set(prev.concat(prom))));
  };

  const handleDelete = (photo) => {
    
    //Почему не получается установить urls через splice? Через console.log проверял -
    //значения меняются. Key для каждого компонента устанавливается. Что я пропускаю?

    // const temp = urls;
    // temp.splice(index, 1);
    // setUrls(temp);

    setUrls(urls.filter(item => item !== photo));
  }

  return (
    <div>
        <label className="Photo-input">
        <span>Click to select</span>
        <input type="file" accept="image/*" multiple name="image" onChange={handleSelect} />
        </label>
      <div className="Photo-container">
        {urls.map((item, index) => (
          <PhotoPreview key={nanoid()} photo={item} index={index} handleDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default Photo;
