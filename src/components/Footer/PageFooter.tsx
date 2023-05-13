import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-gray-400">
      <div className="flex flex-col items-start justify-start sm:items-center sm:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-1 my-10">
          <div className="flex flex-col items-start gap-2 px-4 justify-start">
            <div>
              <p className="font-semibold">
                Address:
                <span className="text-gray-500">
                  {" "}
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Phone:<span className="text-gray-500"> +127 (233) 47472</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Email:
                <span className="text-gray-500"> info@mcpwebsite.com</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Branch:
                <span className="text-gray-500"> Lorem ipsum dolor.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 justify-start">
            <div>
              <Link className="link-light text-gray-400" href="#">
                Home
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Components
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Pages
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Profile
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 justify-start">
            <div>
              <Link className="link-light text-gray-400" href="#">
                About
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Contact Us
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Terms & Condition
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 justify-start">
            <div>
              <Link className="link-light text-gray-400" href="#">
                Services
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Help Links
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Tutorials
              </Link>
            </div>
            <div>
              <Link className="link-light text-gray-400" href="#">
                Utilities
              </Link>
            </div>
          </div>
        </div>
        <div className="py-2 mx-auto text-sm text-gray-500">
          Website developed by{" "}
          <Link
            className="link-light text-gray-400"
            href="https://www.linkedin.com/in/markmadu/"
            target="_blank"
          >
            @Markdev
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
