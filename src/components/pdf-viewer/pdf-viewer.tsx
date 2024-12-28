import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { tw } from "../../utils/react-pdf-tailwind";
import { DocumentProps } from "@react-pdf/renderer";

const PdfViewer = ({
  children,
}: {
  children: React.ReactElement<DocumentProps>;
}) => {
  return (
    <div className="w-screen h-screen">
      <PDFViewer style={tw("w-screen h-screen")} showToolbar>
        {children}
      </PDFViewer>
    </div>
  );
};

export default PdfViewer;
