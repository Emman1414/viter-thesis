import { imgPath } from "@/components/helpers/functions-general";
import Chatbot from "./ChatBot";
import Header from "./Header";
import LiveDateTime from "./LiveDateTime";
import SliderMain from "./SliderMain";

const AvailBlood = () => {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="h-[calc(1240px-675px)]">
            <div className="grid grid-cols-[2fr_1fr_0.5fr_190px]">
              {/* BLOCK 1 */}
              <div className="text p-5">
                <div className="texts">
                  <h2 className="font-bold text-lg mb-2">
                    How to avail blood from the PRC?
                  </h2>
                  <ol className="list-decimal ml-6 space-y-4">
                    <li>
                      Kindly get a blood request form from the hospital where
                      the patient is admitted. The following details are needed:
                      <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                        <li>Full name of the patient</li>
                        <li>Age, Sex, Status</li>
                        <li>Blood type, Rh group</li>
                        <li>Blood component</li>
                        <li>Amount/unit needed</li>
                        <li>Diagnosis/Indication for transfusion</li>
                        <li>
                          Printed name with signature of the attending physician
                        </li>
                      </ol>
                    </li>
                    <li>
                      Bring the blood request form to the nearest Red Cross
                      Blood Service facility.
                    </li>
                    <li>
                      Blood processing fee – payment for the processing of blood
                      to ensure safety of the patient; the amount depends on the
                      blood component.
                    </li>
                    <li>
                      Immediately bring the blood dispensed from Red Cross to
                      the blood bank of the hospital.
                    </li>
                  </ol>
                </div>
              </div>
              {/* BLOCK 2 */}
              <div className="relative max-w-[1200px]">
                <img
                  className="max-w-[700px] object-cover -right-2/3 -z-50 absolute"
                  src={`${imgPath}/red-cross.png`}
                  alt=""
                />
              </div>
              {/* BLOCK 3 */}
              <div className=""></div>
              {/* BLOCK 4 */}
              <div className="flex justify-end text-center w-auto max-w-[500px] overflow-auto">
                <div className="flex flex-col items-center gap-2">
                  <h6 className="max-w-[150px]">Philippine Standard Time:</h6>
                  <LiveDateTime />
                </div>
              </div>
            </div>
            {/* CHATBOT AND ETC. */}
            <div className="flex relative p-2">
              <ul
                className="absolute top-10 right-5
              "
              >
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

export default AvailBlood;
