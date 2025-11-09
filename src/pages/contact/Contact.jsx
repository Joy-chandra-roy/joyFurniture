import React from "react";
import bannerImg from "../../assets/contact-background.jpg";

const Contact = () => {
  return (
    <section className="min-h-screen">
      {/* banner */}
      <div
        className="w-full h-[340px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ background: `url(${bannerImg})` }}
      >
        <h1 className="text-5xl font-bold ">Contact Us</h1>
      </div>
      <div className="mt-20 section-container mb-10 ">
        <div className="rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row md:justify-center gap-20 items-center flex-col-reverse">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.09568241035!2d88.60522383705242!3d25.623402815826907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1762708898855!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="size-60 md:w-[600px] md:h-[400px]"
          ></iframe>

          <form className="w-60 md:w-[400px] space-y-3">
            <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
                <label>
              First Name:
              <input
                type="text"
                placeholder="joy"
                className="w-full  px-6 py-1.5 bg-white/25 l border border-gray-500   rounded-xl required:"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                placeholder="Chandra Roy"
                className="w-full  px-6 py-1.5 bg-white/25 l border border-gray-500   rounded-xl required:"
              />
            </label>
            </div>
            <div>
                <label>
                Email:
              <input
                type="email"
                placeholder="joy@gmail.com"
                className="w-full  px-6 py-1.5 bg-white/25 l border border-gray-500   rounded-xl required:"
              />
            </label>
            <label>
                Message:
              <textarea
                type="text"
                placeholder="Write your message"
                className="w-full  px-6 py-1.5 bg-white/25 l border border-gray-500   rounded-xl h-30 "
              />
            </label>

            </div>
            <div className="flex  md:flex-row gap-5 items-center justify-center">
                <button className="bg-green-600 text-center py-2 px-8 md:px-15 rounded-2xl ">Submit</button>
                <button  className="bg-red-600 text-center py-2 px-8 md:px-15 rounded-2xl ">Reset</button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
