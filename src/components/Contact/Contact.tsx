import TextField from "../TextField";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="w-full h-96 bg-neutral-900">
        <iframe
          className="w-full h-full object-center object-cover opacity-60 hover:opacity-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.949351366533!2d3.327888125979529!3d6.547246116854127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f1f7cb01e55%3A0x24db9744cd285a31!2sGlobus%20Supermarket!5e0!3m2!1sen!2sng!4v1684042657805!5m2!1sen!2sng"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full bg-gray-100 text-neutral-900 py-10">
        <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-3 lg:max-w-4xl bg-white py-10 px-5">
          <div className="flex flex-wrap justify-start mx-auto items-center lg:flex-col lg:items-start lg:justify-center gap-10 px-5 mb-20 mt-5 lg:col-span-1 lg:mb-0 lg:mt-0">
            <div className="flex gap-4 items-center justify-center">
              <p className="text-3xl text-sky-500">
                <CiLocationOn />
              </p>
              <p className="text-neutral-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <p className=" text-3xl text-orange-300">
                <AiOutlinePhone />
              </p>
              <p className=" text-gray-500">+127 (233) 47472</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <p className="text-3xl text-red-400">
                <GoMail />
              </p>
              <p className="text-gray-500">info@mcpwebsite.com</p>
            </div>
          </div>
          <div className="w-full sm:w-[400px] grid grid-cols-1 lg:col-span-2 lg:max-w-xl mx-auto px-2">
            <div className="mx-auto capitalize font-bold text-lg py-1 px-7 mb-6 underline underline-offset-8 border-neutral-300 text-gray-400">
              Request for quote
            </div>
            <div className="p-2">
              <TextField
                label="Full name"
                placeholder="input your full name..."
                inputSize="small"
                fullWidth
              />
            </div>
            <div className="p-2">
              <TextField
                label="email"
                placeholder="Email address"
                type="email"
                inputSize="small"
                fullWidth
              />
            </div>
            <div className="p-2">
              <TextField
                label="Phone no"
                placeholder="phone number"
                inputSize="small"
                fullWidth
              />
            </div>
            <div className="p-2">
              <p className="capitalize py-1">message</p>
              <textarea
                className="w-full px-3 py-2 rounded-lg overflow-visible focus:outline-sky-500 border-2 border-neutral-200 max-w-full"
                rows={5}
              />
            </div>
            <div className="mx-auto p-2">
              <button className="btn-primary">submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
