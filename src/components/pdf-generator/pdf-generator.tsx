import {
  Page,
  Text,
  View,
  Document,
  // PDFViewer,
  Image,
} from "@react-pdf/renderer";
import govt_logo from "../../assets/govt.png";
import qr_img from "../../assets/qr.png";
import { tw } from "../../utils/react-pdf-tailwind";
import { Inputs } from "../../types/common";

function PdfGenerator({ inputs }: { inputs: Inputs }) {
  return (
    <Document>
      <Page size="A4" style={tw("p-4")}>
        <View style={tw("h-full border-black border-[3px] p-6 pt-10")}>
          <View style={tw("flex flex-row justify-center")}>
            <View style={tw("flex-1")}></View>
            <View style={tw("flex-1 flex flex-row justify-center")}>
              <Image src={govt_logo} style={tw("h-[80px] w-[80px]")} />
            </View>
            <View style={tw("flex-1 flex flex-row justify-end")}>
              <Text
                style={tw(
                  "text-center mb-5 text-[6px] sm:text-[8px] font-bold uppercase"
                )}
              >
                ORIGINAL COPY
              </Text>
            </View>
          </View>

          <View style={tw("flex flex-col gap-1 text-[10px]")}>
            <Text style={tw("text-center font-bold uppercase")}>
              Government of Odisha
            </Text>
            <Text style={tw("text-center font-bold uppercase")}>
              Department of Steel & Mines
            </Text>
          </View>

          <View style={tw("flex mt-3")}>
            <Text style={tw("text-center text-[10px] font-bold")}>Form-Y</Text>
            <Text style={tw("flex-1 text-center text-[8px]")}>
              [See rule 58(1)]
            </Text>
          </View>

          <View style={tw("flex flex-col items-end gap-1 mt-2")}>
            <View style={tw("flex flex-row gap-0.5")}>
              <Text style={tw("text-[9px]")}>Pass</Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black pl-1 text-[#081c5f] text-[5px] text-[10px] font-bold min-w-[80px]"
                )}
              >
                {inputs?.pass}
              </Text>
            </View>
            <View style={tw("flex flex-row gap-0.5")}>
              <Text style={tw("text-[9px]")}>No.</Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black pl-1 text-[#081c5f] text-[5px] text-[10px] font-bold min-w-[80px]"
                )}
              >
                {inputs?.no}
              </Text>
            </View>
          </View>

          <View
            style={tw(
              "flex flex-col items-center justify-center text-[8px] gap-1 mt-2"
            )}
          >
            <Text style={tw("font-bold text-center")}>TRANSIT PASS</Text>
            <Text style={tw("text-center")}>FOR MINOR MINERALS</Text>
          </View>

          <View style={tw("flex gap-3 mt-10")}>
            <View style={tw("flex flex-row gap-1")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>1.</Text> Book No :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[8px] font-bold w-[100px]"
                )}
              >
                {inputs?.book}
              </Text>
            </View>

            <View style={tw("flex flex-row gap-1 text-[10px]")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>2.</Text> Date & Time :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[8px] font-bold w-[100px]"
                )}
              >
                {inputs?.date}
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[8px] font-bold w-[100px]"
                )}
              >
                {inputs?.time}
              </Text>
            </View>
            <View style={tw("flex flex-row gap-1 text-[10px]")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>3.</Text> Circle Mining Office :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[8px] sm:text-[10px] font-bold w-[100px] sm:w-[200px]"
                )}
              >
                {inputs?.mining}
              </Text>
            </View>
            <View style={tw("flex flex-row gap-1 text-[10px]")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>4.</Text> Name of the
                Quarry/Lease/Source of Auction :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[70px]"
                )}
              >
                {inputs?.auction}
              </Text>
            </View>
            <View style={tw("flex flex-row gap-1 text-[10px]")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>5.</Text> Name of the
                Licensee/Lessee/Permit Holder/Auction Holder/Auction Purchaser :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[100px]"
                )}
              >
                {inputs?.purchaser}
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>6.</Text> Destination :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[80px]"
                )}
              >
                {inputs?.destination}
              </Text>
              <Text style={tw("text-[10px] ml-2")}>Route :</Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[80px]"
                )}
              >
                {inputs?.route}
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>7.</Text> Minor Mineral :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[130px]"
                )}
              >
                {inputs?.minor}
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>8.</Text> Permit No. :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[70px]"
                )}
              >
                {inputs?.permit}
              </Text>
              <Text style={tw("ml-3 text-[10px] font-bold")}>Date : </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[70px]"
                )}
              >
                {inputs?.date2}
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>9.</Text> Quantity Permitted
                (Cum/Tonnes) :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[100px]"
                )}
              >
                {inputs?.quantity}
              </Text>
            </View>

            {/* Table */}
            <View style={tw("flex text-[10px] m-3")}>
              {/* Header */}
              <View style={tw("flex flex-row")}>
                <View
                  style={tw(
                    "flex-1 p-1 flex items-center justify-center border border-r-0 border-gray-400"
                  )}
                >
                  <Text>Length</Text>
                </View>
                <View
                  style={tw(
                    "flex-1 p-1 flex items-center justify-center border border-r-0 border-gray-400"
                  )}
                >
                  <Text>Breadth</Text>
                </View>
                <View
                  style={tw(
                    "flex-1 p-1 flex items-center justify-center border border-gray-400"
                  )}
                >
                  <Text>Height</Text>
                </View>
              </View>
              {/* Items */}
              {inputs.lineItems.map((item, index) => (
                <View style={tw("flex flex-row")} key={index}>
                  <View
                    style={tw(
                      "flex-1 p-1 flex items-center justify-center border-l border-b border-gray-400"
                    )}
                  >
                    <Text>{item.length}</Text>
                  </View>
                  <View
                    style={tw(
                      "flex-1 p-1 flex items-center justify-center border-l border-b border-gray-400"
                    )}
                  >
                    <Text>{item.breadth}</Text>
                  </View>
                  <View
                    style={tw(
                      "flex-1 p-1 flex items-center justify-center border-l border-b border-r border-gray-400"
                    )}
                  >
                    <Text>{item.height}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px] font-normal w-auto")}>
                <Text style={tw("font-bold")}>10.</Text> Measurement of Mineral
                in Carrier (in meter) :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[80px]"
                )}
              >
                {inputs?.meter}
              </Text>
            </View>

            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>11.</Text> Cubic Content (Cum) :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[100px]"
                )}
              >
                {inputs?.cum}
              </Text>
            </View>

            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>12.</Text> Weight of the Vehicle
                (Tonnes) :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                )}
              >
                {inputs?.ton}
              </Text>
              <Text style={tw("ml-3 text-[10px]")}>Tare :</Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                )}
              >
                {inputs?.tare}
              </Text>
            </View>

            <View style={tw("flex flex-row")}>
              <Text style={tw("text-[10px]")}>
                <Text style={tw("font-bold")}>13.</Text> Weight of the Mineral :
              </Text>
              <Text
                style={tw(
                  "border-b border-dotted border-black text-[#081c5f] text-[10px] font-bold w-[100px]"
                )}
              >
                {inputs?.mineral}
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View style={tw("border-b border-black mx-6 my-8")}></View>

          <View style={tw("flex flex-row gap-2 items-center")}>
            <Image src={qr_img} style={tw("h-[140px] w-[150px]")} />

            <View style={tw("flex gap-10 mt-8 text-[10px]")}>
              <View style={tw("flex flex-row gap-[55px]")}>
                <Text style={tw("w-[20%]")}>
                  Signature of the person Issuing with date
                </Text>
                <Text style={tw("w-[20%]")}>
                  Signature of the carrier Driver with date
                </Text>
                <Text style={tw("w-[20%]")}>
                  Signature of the checking staff with date
                </Text>
              </View>
              <View style={tw("flex flex-row gap-[90px]")}>
                <Text style={tw("w-[30%]")}>
                  Signature of the person receiving at the destination with date
                </Text>
                <Text style={tw("w-[30%]")}>
                  Signature of Inspector I/C with date & time
                </Text>
              </View>
              <View style={tw("flex flex-row justify-center -ml-5")}>
                <Text>Office Seal</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfGenerator;
