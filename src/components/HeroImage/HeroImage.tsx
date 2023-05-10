import Link from "next/link";

  export default function HeroImage () {
    return (
      <div className="py-10 w-full bg-gray-100">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
          <div className="px-8 py-12 lg:px-12 lg:py-24 mx-auto max-w-md lg:max-w-full sm:max-w-xl bg-gray-100 xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl xl:bg-gray-100">
              <img className="h-10 mx-auto" src="vercel.svg" alt="website logo" />
              <img
                className="mt-6 sm:mt-8 sm:w-full sm:object-cover object-center lg:hidden"
                src="/images/blog/manager.jpg"
                alt="Delivery man taking stock"
              />
              <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl text-gray-900 font-bold lg:text-2xl xl:text-4xl">
                You can work from anywhere.
                <br className="inline-block" />
                <span className="text-indigo-500">Take advantage of it.</span>
              </h1>
              <p className="mt-2 sm:mt-4text-gray-500 sm:text-lg lg:text-l xl:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium atque soluta corporis in placeat. Molestiae dolorem
                distinctio autem deserunt itaque cupiditate sed qui maiores, quod
                odio aperiam nulla ex facere nostrum id esse minima. Reiciendis
                aliquam optio, autem quo numquam est vero hic et doloremque eius
                culpa a molestias voluptatum dignissimos, ipsum totam quos
                possimus molestiae omnis rerum dolorem aut deleniti dolores
                voluptate.
              </p>
              <div className="space-x-2 mt-4 sm:mt-6">
                <Link className="btn-primary" href="#">
                  Book your escape
                </Link>
                <Link className="btn-primary" href="#">
                  Next Project
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:block 2xl:col-span-3 2xl:mx-10">
            <img
              className="absolute object-cover object-right h-full w-full inset-0"
              src="/images/blog/manager.jpg"
              alt="Delivery man taking stock"
            />
          </div>
        </div>
      </div>
    );
  }
  