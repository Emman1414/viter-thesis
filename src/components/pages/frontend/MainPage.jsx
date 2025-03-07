import React from "react";
import Chatbot from "./ChatBot";
import Header from "./Header";
import LiveDateTime from "./LiveDateTime";
import SliderMain from "./SliderMain";

const MainPage = () => {
  return (
    <>
      <Header />

      {/* Push content down to avoid header overlap */}
      <section className="py-5 mt-[100px]">
        <div className="container mx-auto px-6 max-w-[1600px] py-2">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] lg:grid-cols-[2fr_1.5fr_100px_250px] gap-6 h-auto md:h-[calc(100vh-200px)]">
            {/* BLOCK 1 - Slider */}
            <div className="sliderMain relative h-[300px] md:h-full">
              <SliderMain />
            </div>

            {/* BLOCK 2 - Constrained scrollable content */}
            <div className="flex flex-col p-3 bg-gray-100 rounded-lg shadow-md h-auto md:h-full overflow-y-auto">
              <h4 className="font-bold mb-1">Philippine Red Cross</h4>
              <h6 className="opacity-70 mb-1.5">Background</h6>
              <p>
                • The Philippine Red Cross is a humanitarian organization, which
                provides services to uplift the lives of the underprivileged.
                One of its basic services is the Blood Services, which works on
                providing the country with an adequate and safer blood supply
                from volunteer, non-remunerated blood donors.
              </p>
              <p>
                • Human blood for transfusion is the only form of treatment that
                cannot be manufactured. It is only possible if blood from
                kindhearted people is available. Donating blood is a life-saving
                act. A healthy Filipino has 16-18 glasses of blood. Donating 450
                cc (approximately one glass) will not cause any weakness or ill
                effects. Giving blood will not take up too much of your time. Be
                a life saver. Share the lifesaving gift of blood.
              </p>
            </div>

            {/* BLOCK 3 - Empty (hidden on mobile) */}
            <div className="hidden lg:block h-full"></div>

            {/* BLOCK 4 - Live Time */}
            <div className="flex justify-end text-center w-full max-w-[500px] h-auto md:h-full hidden lg:block">
              <div className="flex flex-col items-center gap-2">
                <h6 className="max-w-[150px]">Philippine Standard Time:</h6>
                <LiveDateTime />
              </div>
            </div>
          </div>

          {/* CHATBOT AND ETC. */}
          <div className="flex relative p-2">
            <ul className="absolute top-10 right-5 z-50">
              <li className="flex p-3">
                <Chatbot />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
