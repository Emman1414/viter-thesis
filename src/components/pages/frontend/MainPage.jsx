import React from "react";
import Header from "./Header";
import { imgPath } from "@/components/helpers/functions-general";

const MainPage = () => {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="grid grid-cols-[1.5fr_1fr_0.5fr_190px]">
            <div className="sliderMain p-5">
              <img className="" src={`${imgPath}/main-page-wall.jpg`} alt="" />
            </div>
            <div className="p-3">
              <h4 className="font-bold mb-1">Philippine Red Cross</h4>
              <h6 className="opacity-70 mb-1.5">Background</h6>
              <p>
                • Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                placeat aliquam omnis delectus quo sed, accusantium veniam
                suscipit voluptatum culpa velit exercitationem commodi
                consectetur, libero in nulla eos ipsum eveniet similique? Sequi,
                tenetur nisi eum omnis laudantium impedit porro, vero, fugiat
                molestiae quos fugit laboriosam delectus nam voluptatibus
                exercitationem repellendus.
                <br /> • Ea molestias officia voluptates ut corporis autem odio
                temporibus minima itaque velit molestiae suscipit reiciendis
                dignissimos, non enim deleniti id nostrum? Hic ad architecto
                animi sapiente praesentium laboriosam fugit, eius possimus amet
                tenetur iure. Doloremque eaque eveniet tempora odio debitis
                consectetur nisi, officiis dignissimos illum vitae,
                exercitationem voluptatum est perferendis!
              </p>
            </div>
            <div></div>

            <div className="flex justify-end text-center w-auto max-w-[500px] overflow-auto">
              <div className="flex flex-col items-center gap-2">
                <h6 className="max-w-[150px]">Philippine Standard Time:</h6>
                <ul className="flex gap-3">
                  <li className="border border-white text-blue-500 rounded-md p-1 px-2 bg-gray-200">
                    <small>Jun 10, 2025</small>
                  </li>
                  <li className="border border-white text-blue-500 rounded-md p-1 px-2 bg-gray-200">
                    <small>09:41AM</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-2">xxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
