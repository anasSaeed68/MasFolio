import React, { useRef, useState } from 'react'

import { SvgLoader } from '../components/animations/SvgLoader';

export const Resume_Analyzer = () => {

    const [step, setStep] = useState(1);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [isDragging, setIsDragging] = useState(false); 
    const fileInputRef = useRef(null);
    
    
    const handleUpload = (e)=> {
        const uploadedFile = e.target.files[0];
        if(uploadedFile){
            console.log("File Uploaded:",uploadedFile.name);
            setFile(uploadedFile);
            setStep((prev => prev + 1));
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) =>{
        setIsDragging(false);
    };
    const handleDrop = (e) =>{
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if(file) {
            console.log("Dropped:", file.name);
          setFile(file);
            setStep((prev => prev + 1));
        }
    };

    const analyzeResume = () => {
        setLoading(true);

        setTimeout(()=> {
            setAnalysis({
                score: 70,
                strengths: [
                    "Good Technical skills section",
                    "Clear work experience",
                ],
                improvements: [
                    "Add measureable results",
                    "Improve resume summary",
                ]
            });
            setLoading(false);
            setStep(3);
        }, 7000);
    };


  return (
    <div className='flex flex-col gap-5 w-full h-full  items-center justify-center p-4 rounded '> 
         <h2 className='text-2xl font-semibold '>AI Resume Analyzer</h2>
<div className='flex '>
     {[1,2,3,4].map((index)=>(
        <div className='flex justify-center items-center'>
        <div key={index} className={`${step >= index  ? 'bg-blue-500': 'bg-gray-400'} w-10 h-full p-2 rounded-2xl px-4`}>
            {index}
            </div>
            <div className={`${index < 4 ? 'w-15':''} bg-amber-50 h-2`}>
                <div className={`${step > index  && 'lineSlider '} transition-all duration-75`}/>
                </div>
          </div>  
     ))}
     </div>
         {
            step === 1 && (
                <div className={`upload-box ${isDragging ? "dragging": ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                >
                    <input 
                    type='file'
                    accept='.pdf,.doc,.docx'
                    onChange={handleUpload}
                    ref={fileInputRef}
                    hidden
                    />
                    { !isDragging ? (
                        <>
                    <p className='text-[16px] font-bold'>📄 Drag & drop your resume here</p>
                    <span>or Click to upload (PDF, DOC, DOCX)</span>
                    </>
                    ) : (
                        <p className='text-4xl text-red-500 font-extrabold rotate-3 scale-150'>Drag</p>

                    )
                }
                    
                    </div>
            )
         }
         {
            step === 2 && file  && (
                <div className='upload-box gap-2'>
                    <h3 >Resume: <span className='text-cyan-200 '> {file.name}</span>  </h3>
                    <h4>Size: <span className='text-cyan-200'> {
                         file.size < 1024 ? `$[file.size] B` :
                         file.size < 1048576 ? `${(file.size / 1024).toFixed(2)} KB` :
                         `${(file.size / 1048576).toFixed(2)} MB`
                        } </span>
                    </h4>
                    {/* <p><strong>File:</strong> {file.name}</p> */}
                    <button onClick={analyzeResume} disabled={loading} >
                        {loading ? (
                            <p className='flex '>
                                <span className='font-semibold'>Analyzing</span>
                           <SvgLoader />
                         
                        </p>) :<p className='rounded-lg bg-black p-2 shadow hover:shadow-amber-300 cursor-pointer active:shadow-red-400'>Start Analysis</p> }
                    </button>
                    </div>
            )
         }
          {
            step === 3 &&(
                <div>
                    <p onClick={() => setStep(4)}>Hello world</p>
                    </div>
            )
          }
          {
            step === 4 &&(
                <div>
                    <p >Hello world</p>
                    </div>
            )
          }

          <button onClick={()=> setStep((prev) => prev > 1 ? prev -1: prev)}>Previous</button>



    </div>
  )
}
