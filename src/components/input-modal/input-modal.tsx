import { ChangeEvent, useState } from "react";

import govt_logo from "../../assets/govt.png";
import qr_img from "../../assets/qr.png";

import { Inputs } from "../../types/common";
import Modal from "../modal/modal";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PdfGenerator from "../pdf-generator/pdf-generator";

const InputModal = () => {
  const [inputs, setInputs] = useState<Inputs>({
    pass: "12345",
    no: "67890",
    book: "A1",
    date: "2023-10-01",
    time: "10:00 AM",
    mining: "Central Mining Office",
    auction: "Auction House",
    purchaser: "John Doe",
    destination: "City Center",
    route: "Route 66",
    minor: "Granite",
    permit: "P123",
    date2: "2023-10-02",
    quantity: "100",
    meter: "50",
    cum: "200",
    ton: "10",
    tare: "2",
    mineral: "Iron Ore",
    lineItems: [
      {
        length: "10",
        breadth: "5",
        height: "2",
      },
      {
        length: "12",
        breadth: "6",
        height: "3",
      },
    ],
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const pdfChecks = () => {
    const requiredFields: (keyof Inputs)[] = [
      "pass",
      "no",
      "book",
      "date",
      "time",
      "mining",
      "auction",
      "purchaser",
      "destination",
      "route",
      "minor",
      "permit",
      "date2",
      "quantity",
      "meter",
      "cum",
      "ton",
      "tare",
      "mineral",
    ];

    for (const field of requiredFields) {
      if (!inputs[field]) {
        alert(`Please fill the ${field} field.`);
        return false;
      }
    }

    if (
      inputs.lineItems.length === 0 ||
      inputs.lineItems.some(
        (item) => !item.length || !item.breadth || !item.height
      )
    ) {
      alert("Please fill all line items with length, breadth, and height.");
      return false;
    }
    return true;
  };
  const downloadPdf = async () => {
    if (!pdfChecks()) {
      return;
    }
    const fileName = inputs.book ? `${inputs.book}.pdf` : "test.pdf"; // Use book number as file name, fallback to "test.pdf"
    const blob = await pdf(<PdfGenerator inputs={inputs} />).toBlob();
    saveAs(blob, fileName);
  };
  const viewPdf = async () => {
    // if (!pdfChecks()) {
    //   return;
    // }
    const blob = await pdf(<PdfGenerator inputs={inputs} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };
  return (
    <Modal
      isOpen={true}
      onClose={() => {}}
      className="w-[clamp(200px,850px,90vw)] h-[clamp(200px,80vh,90vh)]"
      title="Please Fill the Form"
      bottomContent={
        <div className="flex justify-end gap-2 mx-2 my-1.5">
          <button
            onClick={viewPdf}
            className="px-3 py-1 rounded-[4px] bg-[#2a8fba] text-white"
          >
            View
          </button>
          <button
            onClick={downloadPdf}
            className="px-3 py-1 rounded-[4px] bg-[#208448] text-white"
          >
            Download
          </button>
        </div>
      }
    >
      <div className="p-4 w-full h-auto">
        <div className="h-full border-black border-[3px] p-6">
          <div className="flex flex-row justify-center">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-row justify-center">
              <img src={govt_logo} className="h-[80px] w-[80px]" />
            </div>
            <div className="flex-1 flex flex-row justify-end">
              <p className="text-center mb-5 text-[8px] font-bold uppercase">
                ORIGINAL COPY
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-[10px]">
            <p className="text-center font-bold uppercase">
              Government of Odisha
            </p>
            <p className="text-center font-bold uppercase">
              Department of Steel & Mines
            </p>
          </div>

          <div className="flex flex-col mt-1">
            <p className="text-center text-[10px] font-bold">Form-Y</p>
            <p className="flex-1 text-center text-[8px]">[See rule 58(1)]</p>
          </div>

          <div className="flex flex-col items-end gap-1 mt-2">
            <div className="flex flex-row gap-0.5">
              <p className="text-[9px]">Pass</p>
              <input
                name="pass"
                value={inputs.pass}
                onChange={handleChange}
                className="border-b border-dotted border-black pl-1 uppercase text-[#081c5f] text-[10px] font-bold w-[80px] outline-none"
              />
            </div>
            <div className="flex flex-row gap-0.5">
              <p className="text-[9px]">No.</p>
              <input
                name="no"
                value={inputs.no}
                onChange={handleChange}
                className="border-b border-dotted border-black pl-1 uppercase text-[#081c5f] text-[10px] font-bold w-[80px] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[8px] gap-1 mt-2">
            <p className="font-bold text-center">TRANSIT PASS</p>
            <p className="text-center">FOR MINOR MINERALS</p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-row gap-1">
              <p className="text-[10px]">
                <span className="font-bold">1.</span> Book No :
              </p>
              <input
                name="book"
                value={inputs.book}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[100px] outline-none"
              />
            </div>

            <div className="flex flex-row gap-1 text-[10px]">
              <p className="text-[10px]">
                <span className="font-bold">2.</span> Date & Time :
              </p>
              <input
                name="date"
                type="date"
                value={inputs.date}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[90px] outline-none"
              />
              <input
                name="time"
                type="time"
                value={inputs.time}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[70px] outline-none"
              />
            </div>
            <div className="flex flex-row gap-1 text-[10px]">
              <p className="text-[10px]">
                <span className="font-bold">3.</span> Circle Mining Office :
              </p>
              <input
                name="mining"
                value={inputs.mining}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[200px] outline-none"
              />
            </div>
            <div className="flex flex-row gap-1 text-[10px]">
              <p className="text-[10px]">
                <span className="font-bold">4.</span> Name of the
                Quarry/Lease/Source of Auction :
              </p>
              <input
                name="auction"
                value={inputs.auction}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[180px] outline-none"
              />
            </div>
            <div className="flex flex-row gap-1 text-[10px]">
              <p className="text-[10px]">
                <span className="font-bold">5.</span> Name of the
                Licensee/Lessee/Permit Holder/Auction Holder/Auction Purchaser :
              </p>
              <input
                name="purchaser"
                value={inputs.purchaser}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[100px] outline-none"
              />
            </div>
            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">6.</span> Destination :
              </p>
              <input
                name="destination"
                value={inputs.destination}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[80px] outline-none"
              />
              <p className="text-[10px] ml-2">Route :</p>
              <input
                name="route"
                value={inputs.route}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[80px] outline-none"
              />
            </div>
            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">7.</span> Minor Mineral :
              </p>
              <input
                name="minor"
                value={inputs.minor}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[130px] outline-none"
              />
            </div>
            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">8.</span> Permit No. :
              </p>
              <input
                name="permit"
                value={inputs.permit}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[70px] outline-none"
              />
              <p className="ml-3 text-[10px] font-bold">Date : </p>
              <input
                name="date2"
                type="date"
                value={inputs.date2}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[90px] outline-none"
              />
            </div>
            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">9.</span> Quantity Permitted
                (Cum/Tonnes) :
              </p>
              <input
                name="quantity"
                type="number"
                value={inputs.quantity}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[100px] outline-none"
              />
            </div>

            <div className="flex flex-col text-[10px] m-3">
              <div className="flex flex-row">
                <div className="flex-1 p-1 flex items-center justify-center border border-r-0 border-gray-400">
                  <p>Length</p>
                </div>
                <div className="flex-1 p-1 flex items-center justify-center border border-r-0 border-gray-400">
                  <p>Breadth</p>
                </div>
                <div className="flex-1 p-1 flex items-center justify-center border border-gray-400">
                  <p>Height</p>
                </div>
              </div>
              {inputs.lineItems.map((item, index) => (
                <div className="flex flex-row group relative" key={index}>
                  <div className="flex-1 p-1 flex items-center justify-center border-l border-b border-gray-400">
                    <input
                      className="w-full h-full appearance-none outline-none"
                      type="number"
                      value={item.length}
                      onChange={(e) => {
                        const newLineItems = inputs.lineItems.map((ele, i) =>
                          i === index ? { ...ele, length: e.target.value } : ele
                        );
                        setInputs((prev) => ({
                          ...prev,
                          lineItems: newLineItems.filter(Boolean),
                        }));
                      }}
                    />
                  </div>
                  <div className="flex-1 p-1 flex items-center justify-center border-l border-b border-gray-400">
                    <input
                      className="w-full h-full appearance-none outline-none"
                      type="number"
                      value={item.breadth}
                      onChange={(e) => {
                        const newLineItems = inputs.lineItems.map((ele, i) =>
                          i === index
                            ? { ...ele, breadth: e.target.value }
                            : ele
                        );
                        setInputs((prev) => ({
                          ...prev,
                          lineItems: newLineItems.filter(Boolean),
                        }));
                      }}
                    />
                  </div>
                  <div className="flex-1 p-1 flex items-center justify-center border-l border-b border-r border-gray-400">
                    <input
                      className="w-full h-full appearance-none outline-none"
                      type="number"
                      value={item.height}
                      onChange={(e) => {
                        const newLineItems = inputs.lineItems.map((ele, i) =>
                          i === index ? { ...ele, height: e.target.value } : ele
                        );
                        setInputs((prev) => ({
                          ...prev,
                          lineItems: newLineItems.filter(Boolean),
                        }));
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      if (inputs.lineItems.length === 1) {
                        alert("At least one item is required");
                        return;
                      }
                      const newLineItems = inputs.lineItems.filter(
                        (_, i) => i !== index
                      );
                      setInputs((prev) => ({
                        ...prev,
                        lineItems: newLineItems.filter(Boolean),
                      }));
                    }}
                    className="cross absolute text-lg top-[50%] translate-y-[-50%] right-0.5 hover:visible group-hover:visible invisible cursor-pointer bg-white h-[90%] pb-0.5 w-[20px] flex items-center justify-center"
                  >
                    &times;
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-1">
                {inputs.lineItems.length < 5 ? (
                  <button
                    onClick={() => {
                      setInputs((prev) => ({
                        ...prev,
                        lineItems: [
                          ...prev.lineItems,
                          {
                            length: "",
                            breadth: "",
                            height: "",
                          },
                        ],
                      }));
                    }}
                    className="text-[10px] appearance-none px-2 py-0.5 bg-gray-200 duration-100 hover:bg-gray-300"
                  >
                    Add Row
                  </button>
                ) : (
                  <div className="">5 Items Can Added</div>
                )}
              </div>
            </div>

            <div className="flex flex-row">
              <p className="text-[10px] font-normal w-auto">
                <span className="font-bold">10.</span> Measurement of Mineral in
                Carrier (in meter) :
              </p>
              <input
                name="meter"
                value={inputs.meter}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[80px] outline-none"
              />
            </div>

            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">11.</span> Cubic Content (Cum) :
              </p>
              <input
                name="cum"
                value={inputs.cum}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[100px] outline-none"
              />
            </div>

            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">12.</span> Weight of the Vehicle
                (Tonnes) :
              </p>
              <input
                name="ton"
                value={inputs.ton}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[50px] outline-none"
              />
              <p className="ml-3 text-[10px]">Tare :</p>
              <input
                name="tare"
                value={inputs.tare}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[50px] outline-none"
              />
            </div>

            <div className="flex flex-row">
              <p className="text-[10px]">
                <span className="font-bold">13.</span> Weight of the Mineral :
              </p>
              <input
                name="mineral"
                value={inputs.mineral}
                onChange={handleChange}
                className="border-b border-dotted border-black uppercase text-[#081c5f] text-[10px] font-bold w-[100px] outline-none"
              />
            </div>
          </div>

          <div className="border-b border-black mx-6 my-4"></div>

          <div className="flex flex-row gap-2 items-center max-md:flex-wrap">
            <img src={qr_img} className="h-[140px] w-[140px] object-cover" />

            <div className="flex flex-col gap-10 mt-4 text-[10px]">
              <div className="flex flex-row gap-[15%]">
                <p className="w-[20%]">
                  Signature of the person Issuing with date
                </p>
                <p className="w-[20%]">
                  Signature of the carrier Driver with date
                </p>
                <p className="w-[20%]">
                  Signature of the checking staff with date
                </p>
              </div>
              <div className="flex flex-row gap-[15%] justify-evenly">
                <p className="w-[30%]">
                  Signature of the person receiving at the destination with date
                </p>
                <p className="w-[30%]">
                  Signature of Inspector I/C with date & time
                </p>
              </div>
              <div className="flex flex-row justify-center -ml-5">
                <p>Office Seal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InputModal;
