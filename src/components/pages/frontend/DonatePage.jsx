import React from "react";
import Header from "./Header";
import DonateForm from "./DonateForm";

const DonatePage = () => {
  return (
    <>
      <Header />
      {/* panel 1 */}
      <section className="py-5 mt-[100px]">
        <div className="container mx-auto px-4 max-w-[900px]">
          {/* How to Register Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-red-700 text-white py-2 rounded-md">
              How to Register
            </h2>
          </div>

          <div className="mt-6 space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">📝</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-600">
                  STEP 1: Register
                </h3>
                <p>
                  Visit the nearest chapter or branch and fill out the
                  membership form.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">💰</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-600">STEP 2: Pay</h3>
                <p>
                  Pay the annual membership fee depending on your chosen
                  category.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl">🎫</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-600">
                  STEP 3: Claim
                </h3>
                <p>Get your membership card once available.</p>
              </div>
            </div>

            {/* Membership Validity Notice */}
            <div className="p-4 bg-red-100 border-l-4 border-red-500 rounded-md">
              <p className="text-red-600 font-bold">
                Membership card is valid within 12 months from the date of
                registration.
              </p>
              <p className="mt-1">
                Renew your membership card on or before the expiration date.
              </p>
            </div>

            {/* Additional Benefits */}
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-red-700 text-white py-2 rounded-md">
                Additional Benefits
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 text-4xl">🐾</div>
                <p className="font-bold mt-2">ANIMAL BITE</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-red-500 text-4xl">🐜</div>
                <p className="font-bold mt-2">INSECT BITE</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-red-500 text-4xl">🤒</div>
                <p className="font-bold mt-2">SICKNESS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LINE */}
      <div className="border mx-10 my-10"></div>
      {/* LINE */}
      {/* panel 2 */}
      <section className="py-5 mt-[100px]">
        <div className="container mx-auto px-4 max-w-[900px]">
          {/* Claim Processing Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-red-700 text-white py-2">
              Claim Processing
            </h2>
          </div>

          <div className="mt-6 space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl font-bold">1</div>
              <div className="flex-1">
                <p className="font-bold">
                  Claimant must report the incident to the PRC Office within 30
                  days from the date of accident/loss through SMS or email.
                </p>
                <p className="mt-2">
                  Claimant must file and secure their claim documents within 60
                  days from the date of accident (out-patient cases / date of
                  discharge, if confined) to the nearest PRC Chapter.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl font-bold">2</div>
              <div className="flex-1">
                <p className="font-bold">
                  Claimant should strictly follow the submission of complete
                  documents.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl font-bold">3</div>
              <div className="flex-1">
                <p className="font-bold">
                  If the member has an existing healthcare provider, he/she can
                  still file a claim to PRC on top of their existing insurance.
                </p>
                <p className="mt-2">
                  PRC will require the member to submit a certification of the
                  covered expenses from the healthcare provider. Prudential
                  Guarantee (PGA) will only pay the remaining balance that has
                  not been covered by the member’s healthcare provider depending
                  on the maximum amount of their membership category.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-3xl font-bold">4</div>
              <div className="flex-1">
                <p className="font-bold text-red-600">
                  For any claim concerns, please email us at
                  sanpabloRC@redcross.org.ph or call us at (+63 2) XXX.XXXX
                  local 177 or at (+63 XXX) XXX.XXXX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LINE */}
      <div className="border mx-10 my-10"></div>
      {/* LINE */}
      {/* panel 3 - form */}
      <DonateForm />
    </>
  );
};

export default DonatePage;
