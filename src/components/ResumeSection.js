import React, {useState} from 'react'
import { Document, Page } from 'react-pdf'
import curriculo from '../img/curriculo.pdf'
import luciano from '../img/luciano.pdf'

const ResumeSection = () => {
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={luciano}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
    
}

export default ResumeSection
