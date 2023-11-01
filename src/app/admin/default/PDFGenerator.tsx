import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaCommentsDollar } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFGenerator = ({ uploadedPDF }) => {
  console.log(uploadedPDF);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1); // start on the first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

  const startTimeRef = useRef(Date.now());
  const pageNumberRef = useRef(pageNumber);
  const isInitialPageLoad = useRef(true);

  useEffect(() => {
    pageNumberRef.current = pageNumber;
  }, [pageNumber]);

  useEffect(() => {
    startTimeRef.current = Date.now();

    return () => {
      const endTime = Date.now();
      const duration = Math.round(endTime - startTimeRef.current);
      trackPageView(duration);
    };
  }, [pageNumber]);

  useEffect(() => {
    if (numPages > 0) {
      updateNumPages(numPages);
    }
  }, [numPages]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const duration = Math.round(endTime - startTimeRef.current);
      trackPageView(duration);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  // async function trackPageView(duration = 0) {
  //   if (isInitialPageLoad.current) {
  //     isInitialPageLoad.current = false;
  //     return;
  //   }

  //   await fetch('/api/record_view', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       linkId: '',
  //       documentId: '',
  //       viewId: '',
  //       duration,
  //       pageNumber: pageNumberRef.current,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // async function updateNumPages(numPages) {
  //   await fetch('/api/documents/update', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       documentId: '',
  //       numPages,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  return (
    <div className="mx-auto flex flex-col items-center bg-white">
      {uploadedPDF ? (
        <>
          <Document
            file={uploadedPDF}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            renderMode="canvas"
          >
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={onPageLoadSuccess}
              onRenderError={() => setLoading(false)}
              width={Math.max(pageWidth * 0.355, 400)}
            />
          </Document>
          <div className="my-1 flex items-center justify-between space-x-10">
            <div className="flex">
              <button
                onClick={goToPreviousPage}
                disabled={pageNumber <= 1}
                className={`mr-2 bg-gray-300 p-1 text-xs hover:bg-gray-400 ${
                  pageNumber <= 1 ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                <AiOutlineDoubleLeft />
              </button>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className={`ml-2 bg-gray-300 p-1 text-xs hover:bg-gray-400 ${
                  pageNumber >= numPages ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                <AiOutlineDoubleRight />
              </button>
            </div>
            <div>
              <p className="text-xs text-gray-800 dark:text-gray-800">
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PDFGenerator;
