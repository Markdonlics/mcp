import Link from "next/link";
import { AiOutlineCloudSync } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { Subscription } from "@/components";

const about = () => {
  return (
    <>
      <div className="w-full bg-gray-100 px-5 py-10 sm:py-20 sm:px-20">
        <div className="flex flex-col-reverse sm:flex-row items-start justify-center gap-5 sm:gap-10 mx-auto">
          <div className="grid grid-cols-1 min-w-fit">
            <div className="flex gap-4 text-sm text-gray-400 underline underline-offset-8 py-1 mb-5">
              <Link
                className="link-light font-semibold text-sm text-orange-400"
                href="#"
              >
                Hosting
              </Link>
              <Link
                className="link-light font-semibold text-sm text-gray-400"
                href="#"
              >
                Domains
              </Link>
              <Link
                className="link-light font-semibold text-sm text-gray-400"
                href="#"
              >
                SEO
              </Link>
              <Link
                className="link-light font-semibold text-sm text-gray-400"
                href="#"
              >
                Email
              </Link>
            </div>
            <div className="flex flex-col flex-wrap items-start justify-center">
              <h2 className="text-4xl font-bold tracking-tighter text-neutral-800">
                Premium Web <br />
                Hosting for Your <br />
                Website
              </h2>
              <p className="text-sm py-8 text-gray-400 max-w-xs">
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <div className="flex gap-2 flex-wrap items-center justify-start">
                <Link
                  className="btn-primary text-sm font-normal lowercase py-1.5 px-2 bg-sky-500 text-gray-100 hover:bg-transparent "
                  href="#"
                >
                  Create an Account
                </Link>
                <Link
                  className="btn-primary text-sm font-normal lowercase py-1.5 px-2"
                  href="#"
                >
                  Choose your plan
                </Link>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              className="h-full w-full sm:h-[300px] lg:h-[400px] object-cover object-center"
              src="/images/blog/worker.jpg"
              alt="premium web hosting"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-20 px-5 sm:px-5">
        <div className="sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid justify-center sm:grid-cols-2 mx-auto">
          <div className="flex flex-col items-start justify-center p-6 gap-6">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 font-bold capitalize">
              true cloud web hosting
            </h2>
            <p className="text-gray-900 text-sm sm:text-base">
              True cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don't use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-start gap-10 p-6 items-center justify-center mx-auto">
            <img
              className="max-w-[100px]"
              src="images/logo/cpanel.png"
              alt="cpanel logo"
            />
            <img
              className="max-w-[100px]"
              src="images/logo/vercel.png"
              alt="vercel logo"
            />
            <img
              className="max-w-[100px]"
              src="images/logo/namecheap.png"
              alt="namecheap logo"
            />
            <img
              className="max-w-[100px]"
              src="images/logo/imunity.png"
              alt="imunify logo"
            />
            <img
              className="max-w-[100px]"
              src="images/logo/whogohost.png"
              alt="whogohost logo"
            />
            <img
              className="max-w-[100px]"
              src="images/logo/bluehost.png"
              alt="bluehost logo"
            />
          </div>
        </div>
        <div className="pt-20 max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl grid justify-center items-start sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto text-sm">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center p-4 h-[100px] w-[100px] rounded-full bg-red-100">
              <RxCountdownTimer className=" text-[60px] text-center text-red-600 border-4 border-red-600 rounded-full p-1" />
            </div>
            <h2 className="capitalize font-bold mt-5 text-xl text-neutral-900">
              99.9% Uptime
            </h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              earum voluptas numquam nam voluptates ab! Doloremque aperiam
              veniam blanditiis animi.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center p-4 h-[100px] w-[100px] rounded-full bg-red-100">
              <AiOutlineCloudSync className=" text-[60px] text-center text-red-600" />
            </div>
            <h2 className="capitalize font-bold mt-5 text-xl text-neutral-900">
              Blazing fast web hosting
            </h2>
            <p className="text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate eius quidem ab voluptates assumenda id, ut provident
              dolorum? Id, dolorem.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center p-4 h-[100px] w-[100px] rounded-full bg-red-100">
              <FaExpeditedssl className=" text-[60px] text-center text-red-600" />
            </div>
            <h2 className="font-bold mt-5 text-xl text-neutral-900">
              Free SSL Certificates
            </h2>
            <p className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              soluta eveniet a architecto sed odit aperiam mollitia corrupti
              sequi iusto!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center p-4 h-[100px] w-[100px] rounded-full bg-red-100">
              <MdOutlineSupportAgent className=" text-[60px] text-center text-red-600" />
            </div>
            <h2 className="capitalize font-bold mt-5 text-xl text-neutral-900">
              24x7 friendly support
            </h2>
            <p className="text-gray-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              rerum quos omnis unde officia sed consectetur iste debitis
              necessitatibus aspernatur?
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-5 py-10 sm:py-20 sm:px-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-neutral-800 text-4xl font-bold text-center max-w-lg mx-auto">
            Ready to get started with Lemon Wares?
          </h2>
          <p className="text-center text-lg">
            Choose the package that suits you
          </p>
          <div className="flex items-center justify-center gap-6">
            <p className="text-black font-semibold text-lg">Monthly</p>
            <div className="py-2 px-2 bg-orange-500 rounded-full">
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-12 appearance-none rounded-[0.4375rem] bg-transparent before:pointer-events-none before:absolute before:h-3.5 before:w-6 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.2875rem] after:h-6 after:w-6 after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-transparent checked:after:absolute checked:after:z-[2] checked:after:-mt-[4.5px] checked:after:ml-[2.0625rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:border-none checked:after:bg-neutral-100 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-6 focus:after:w-6 focus:after:rounded-full focus:after:content-[''] checked:focus:before:ml-[2.0625rem] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox"
                role="switch"
                id="flexSwitchChecked"
              />
            </div>
            <p className="text-black font-semibold text-lg">
              Yearly{" "}
              <span className="text-[10px] px-2 py-1 bg-yellow-200 rounded-full ml-2">
                20% discount
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center sm:max-w-xl mx-auto py-5">
            <div className="text-center px-24 font-bold border-b-2 border-orange-500">
              Basic
            </div>
            <div className="text-center px-24 font-bold border-b-2 border-gray-300">
              Premium
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mx-auto lg:max-w-6xl">
            <Subscription />
            <Subscription />
            <Subscription />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
