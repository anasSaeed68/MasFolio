import React from 'react'

import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.js'
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <> 
    <div id='window-header'>
       <WindowControls target='resume'/>
       <h2>Resume.pdf</h2>
       <a href="files/resume.pdf" download className='cursor-pointer' title='Download resume'>
       <Download className='icon cursor-pointer'/>
       </a>
    </div>

  <Document file='files/resume.pdf'>
  <Page 
  pageNumber={1}
    width={500}
    renderTextLayer={false}
    renderAnnotationLayer={false}/>
    </Document>
 
   
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow;