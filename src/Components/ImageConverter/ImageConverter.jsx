import React, { useState } from 'react';
import heic2any from 'heic2any';
import './ImageConverter.css';
import logo from '../../logo.svg';

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      alert('Please select a HEIC file first');
      return;
    }

    try {
      const convertedImageBlob = await heic2any({
        blob: selectedFile,
        toType: 'image/jpeg',
      });

      const url = URL.createObjectURL(convertedImageBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.jpeg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error during conversion:', error);
      alert('Failed to convert HEIC to JPEG');
    }
  };

  return (
    <div className="ImageConverter">
      <div className='container1'>
      Container 1 Content
      <input type="file" accept=".heic" onChange={handleFileChange} />
      </div>
      <div className='container2'>
      Container 2 Content
      </div>
      <div className='container3'>
        <div className='preview'>
          <img src={logo} className='preview-img'/>
          <button onClick={handleConvert}>Download Image</button> 
        </div>
      </div>
      {/* 
      <button>Convert to Selected Type</button>
      
      <button onClick={handleConvert}>Convert to JPEG</button> */}
    </div>
  );
};

export default ImageConverter;
