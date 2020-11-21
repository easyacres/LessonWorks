import React, { useEffect } from "react"
import WebviewerBackend from '../../backends/webviewer';
import PDFViewer from '../PDFViewer/index';

function WebViewerWindow() {
    
    return (
        <div className="webViewerWindow">
            <div className="webviewer">
            <PDFViewer backend={WebviewerBackend} src='../demo.pdf' />
            </div>
        </div>
            
    );
}

export default WebViewerWindow