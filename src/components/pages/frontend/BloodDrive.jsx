import { ChevronDown, ChevronUp } from "lucide-react";
import Chatbot from "./ChatBot";
import Header from "./Header";
import LiveDateTime from "./LiveDateTime";
import React from "react";
import { faq } from "../backend/faq-data/faq"; // Assuming you exported the array from a separate file

const BloodDrive = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  // Function to handle accordion toggle
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getLetter = (index) => String.fromCharCode(97 + index); // Converts 0 -> 'a', 1 -> 'b', etc.

  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="h-[calc(1240px-675px)]">
            <div className="grid grid-cols-[2fr_0.5fr_190px]">
              {/* FAQ Section */}
              <div className="faq-contents">
                {faq.map((item, index) => (
                  <div key={index} className="border rounded-lg shadow-sm mb-4">
                    <button
                      className="faq-drop w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-red-700 font-bold">
                        {item.question}
                      </span>
                      <span className="text-red-700">
                        {openIndex === index ? <ChevronDown /> : <ChevronUp />}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="p-4 bg-white transition-all">
                        <ol className="list-decimal m-1 space-y-4">
                          {item.answer.map((section, secIndex) => (
                            <li key={secIndex}>
                              <span className="font-semibold">
                                {section.title}
                              </span>
                              <ol className=" ml-6 mt-2 space-y-2">
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    {getLetter(subIndex)}) {subItem}
                                  </li>
                                ))}
                              </ol>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* BLOCK 2 */}
              <div></div>

              {/* BLOCK 3 */}
              <div className="flex justify-end text-center w-auto max-w-[500px] overflow-auto">
                <div className="flex flex-col items-center gap-2">
                  <h6 className="max-w-[150px]">Philippine Standard Time:</h6>
                  <LiveDateTime />
                </div>
              </div>
            </div>

            {/* CHATBOT AND ETC. */}
            <div className="flex relative p-2">
              <ul className="absolute top-10 right-5">
                <li className="flex p-3">
                  <Chatbot />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BloodDrive;
