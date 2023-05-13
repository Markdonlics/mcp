import Link from "next/link";

export default function HeroImage() {
  return (
    <div className="lg:py-5 w-full">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 lg:px-12 lg:py-24 mx-auto max-w-md lg:max-w-full sm:max-w-xl xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img
              className="mt-6 sm:mt-8 sm:w-full sm:object-cover object-center lg:hidden"
              src="/images/blog/manager.jpg"
              alt="Delivery man taking stock"
            />
            <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl text-orange-500 drop-shadow-sm font-bold lg:text-2xl xl:text-4xl">
              You can work from anywhere.
              <br className="inline-block" />
              <span className="">Take advantage of it.</span>
            </h1>
            <p className="mt-2 sm:mt-4 text-neutral-500 sm:text-lg lg:text-l xl:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium atque soluta corporis in placeat. Molestiae dolorem
              distinctio autem deserunt itaque cupiditate sed qui maiores, quod
              odio aperiam nulla ex facere nostrum id esse minima. Reiciendis
              aliquam optio, autem quo numquam est vero hic et doloremque eius
              culpa a molestias voluptatum dignissimos, ipsum totam quos
              possimus molestiae omnis rerum dolorem aut deleniti dolores
              voluptate.
            </p>
            <div className="mt-4 sm:mt-6 flex justify-start gap-3">
              <div>
                <Link className="link-light" href="#">
                  Book project &#8677;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative mx-auto lg:block 2xl:col-span-3 2xl:mx-10 xl:ml-0">
          <img
            className="absolute object-cover object-right h-full w-11/12 inset-0"
            src="/images/blog/manager.jpg"
            alt="Delivery man taking stock"
          />
        </div>
      </div>
    </div>
  );
}
