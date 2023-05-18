import Link from "next/link";
import { GrCheckmark } from "react-icons/gr";

const Subscription = () => {
  return (
    <div className="flex items-center justify-center max-w-xs border-2 rounded-xl border-gray-300 py-10 px-6 font-mono">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full gap-2">
          <h2 className="text-3xl font-bold">Starter</h2>
          <p className="text-gray-800 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, accusantium!
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h2 className="text-5xl font-bold tracking-tighter">$2.80</h2>
          <p className="text-gray-600">Per month</p>
        </div>
        <Link
          href="#"
          className="py-3 px-10 text-lg border-2 border-neutral-800 rounded-xl text-center font-bold hover:border-orange-500 hover:text-orange-500 active:bg-orange-500 active:text-neutral-100 active:border-transparent"
        >
          Choose this Plan
        </Link>
        <div className="flex flex-col gap-4 justify-center items-start text-neutral-900">
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">2GB SSD</p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              10GB bandwidth
            </p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              15 email accounts
            </p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              unlimited database
            </p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              4 subdomains
            </p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              1 parked domain
            </p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">2 websites</p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">free SSL</p>
          </div>
          <div className="flex items-center justify-start gap-6  text-xl">
            <GrCheckmark />
            <p className="font-semibold text-gray-400 capitalize">
              softaculous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
