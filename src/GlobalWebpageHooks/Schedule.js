import React, { useState } from 'react';

import Fall_Calendar from '../Files/Fall_Calendar.pdf';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const Schedule = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentSuccess = (numPages) => {
        setNumPages(numPages);
        console.log(numPages);
    }


    return (
        <div>
            <Document
                file='../Files/2021_Fall_Calendar_f.pdf'
                onLoadSuccess={onDocumentSuccess}>
                <Page pageNumber={pageNumber}>
                </Page>        
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
    </div>
    );
}
export default Schedule;
//https://www.npmjs.com/package/react-pdf
/*
 *
    return (

        <Document  >
            <Page >
                <View >
                    <Fall_Calendar/>
                </View>
            </Page>
        </Document>

    );
 * 
 * */