import { pdfjs } from "react-pdf";

export const generatePDF = async (pdf: string) => {
  const pdfFile = await pdfjs.getDocument(pdf).promise;
  return pdfFile;
};
