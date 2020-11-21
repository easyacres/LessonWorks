import React, { useState } from 'react';
import "./PDFViewer.css"
import { Document, Page } from "react-pdf"
import { pdfjs } from 'react-pdf';
import { propTypes } from 'react-bootstrap/esm/Image';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default class PDFViewer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.viewerRef = React.createRef();
//     this.backend = new props.backend();
//   }
//   componentDidMount() {
//     const { src } = this.props;
//     const element = this.viewerRef.current;

//     this.backend.init(src, element);
//   }
//   render() {
//     return (
//       <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '100%' }}>
//         {/* <Button id="editBtn">
//           <NavLink id="editNavLink" to="./webviewer" onClick={WebViewerWindow}>
//             Edit
//           </NavLink>
//         </Button> */}
//       </div>
//     )
//   }
// }

function PDFViewer (props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <a href={props.pdflink}>
    <Document file={props.pdf}>
      <Page pageNumber={pageNumber}/>
    </Document>
    </a>
  )
}

export default PDFViewer
