import Link from "next/link";
import { AiOutlineCloudSync } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";

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
    </>
  );
};

export default about;
