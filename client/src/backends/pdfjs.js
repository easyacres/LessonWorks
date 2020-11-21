import "./pdfjs.css";

export default class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement('iframe');
    
        iframe.src = `/pdfjs-2.6.347-dist/web/viewer.html?file=${source}`;
        iframe.width = '300';
        iframe.height = '350';
    
        element.appendChild(iframe);

        
    }
  }

