import useQueryData from "@/components/custom-hook/useQueryData";
import Slider from "react-slick";
import Chatbot from "./ChatBot";
import Header from "./Header";
import LiveDateTime from "./LiveDateTime";
import SliderMain from "./SliderMain";

const MainPage = () => {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="h-[calc(1240px-675px)]">
            <div className="grid grid-cols-[2fr_1fr_0.5fr_190px]">
              <div className="sliderMain relative">
                <SliderMain />
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <h4 className="font-bold mb-1">Philippine Red Cross</h4>
                <h6 className="opacity-70 mb-1.5">Background</h6>
                <p>
                  • The Philippine Red Cross is a humanitarian organization,
                  which provides services to uplift the lives of the
                  underprivileged. One of its basic services is the Blood
                  Services, which works on providing the country with an
                  adequate and safer blood supply from volunteer,
                  non-remunerated blood donors.
                </p>
                <p>
                  • Human blood for transfusion is the only form of treatment
                  that cannot be manufactured. It is only possible if blood from
                  kindhearted people is available. Donating blood is a
                  life-saving act. A healthy Filipino has 16-18 glasses of
                  blood. Donating 450 cc (approximately one glass) will not
                  cause any weakness or ill effects. Giving blood will not take
                  up too much of your time. Be a life saver. Share the
                  lifesaving gift of blood.
                </p>
              </div>
              <div></div>

              <div className="flex justify-end text-center w-auto max-w-[500px] overflow-auto">
                <div className="flex flex-col items-center gap-2">
                  <h6 className="max-w-[150px]">Philippine Standard Time:</h6>
                  <LiveDateTime />
                </div>
              </div>
            </div>
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

export default MainPage;
