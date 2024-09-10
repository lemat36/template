import Image from "next/image";
import First from "./First";

export default function () {
  return (
    <div className="py-[5.56vh] pb-20 px-14">
      <First title="Porfolio" subtitle="you can do it" />
      <div className="grid grid-cols-3 gap-8 pt-16">
        <div className="">
          <Image
            src="/images/pc-2457169_640.jpg"
            width={300}
            height={400}
            alt="img"
            className="w-full"
          />
          <div className="px-6">
            <h1 className="font-bold text-xl m-0 py-4">Project name</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              quasi similique vero laboriosam ut excepturi vitae impedit id iure
              voluptate?
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/pc-2457169_640.jpg"
            width={300}
            height={400}
            alt="img"
            className="w-full"
          />
          <div className="px-6">
            <h1 className="font-bold text-xl m-0 py-4">Project name</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              quasi similique vero laboriosam ut excepturi vitae impedit id iure
              voluptate?
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/pc-2457169_640.jpg"
            width={300}
            height={400}
            alt="img"
            className="w-full"
          />
          <div className="px-6">
            <h1 className="font-bold text-xl m-0 py-4">Project name</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              quasi similique vero laboriosam ut excepturi vitae impedit id iure
              voluptate?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
