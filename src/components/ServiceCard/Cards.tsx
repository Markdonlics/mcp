import Link from "next/link";
let travel = require("@/data/travel.json");

export default function ServiceCard() {
  type datas = {
    thumbnail: string;
    title: string;
    subtitles: [string, string, string];
    price: { currency: string; value: number; period: string };
    rating: number;
    link: string;
  };
  return (
    <div className="bg-gray-100 w-full py-10">
      <div className="max-w-lg mx-auto sm:max-w-xl lg:max-w-4xl 2xl:max-w-6xl">
        <div className="mt-6 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {travel?.map((items: datas) => {
            //const {thumbnail: items.thumbnail, title, subtitles, price, rating, link}};
            const thumbnail = items?.thumbnail,
              title = items?.title,
              subtitles = items?.subtitles,
              price = items?.price,
              rating = items?.rating,
              link = items?.link;
            return (
              <div
                key={title}
                className="flex rounded-lg bg-white shadow-lg overflow-hidden"
              >
                  <img
                    src={thumbnail}
                    alt="profile pics"
                    className="h-30 w-44 object-cover"
                  />
                <div className="px-6 py-3">
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="text-gray-500 text-lg capitalize">
                    {price.currency}
                    {price.value} / {price.period}
                  </p>
                  <p className="text-gray-400 text-sm">Description</p>
                  <ul className="text-gray-500 text-sm pl-5">
                    <li className="list-disc">{subtitles[0]}</li>
                    <li className="list-disc">{subtitles[1]}</li>
                    <li className="list-disc">{subtitles[2]}</li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-gray-400 text-sm">
                      {[...Array(rating || 5)].map((stars) => {
                        return (
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              stroke-width="2.5"
                              stroke="currentColor"
                              className="mr-1 h-5 w-5 text-yellow-500 inline-block"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          </span>
                        );
                      })}
                    </p>
                    <Link
                      href={link}
                      className="text-indigo-500 font-semibold text-sm hover:text-indigo-800"
                    >
                      Explore 76 properties
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
