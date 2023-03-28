import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });    
  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} md:flex-1 mb-3 mx-2 lg:mt-0 bg-white  flex flex-col items-center justify-center border-dashed border-gray-400 border-2 px-4 text-black font-bold py-48`}>
      <input {...getInputProps()} />
      {/* <FiUpload /> */}
      <p>imagenes</p>
    </div>
  )
}