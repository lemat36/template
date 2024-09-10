import Image from "next/image";
import First from "./First";
import { MdDesignServices } from "react-icons/md";

export default function () {
  return (
    <div className="h-screen px-48 py-[5.56vh] ">
      <First title="Services" subtitle="lorem lorem lorem lorem lorem" />
      <div className="grid grid-cols-3 justify-center gap-6 pt-28">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-5">
            <MdDesignServices className="text-5xl text-lem" />
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold m-0"> Graphic design</h1>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
                <br /> Commodi fugiat vel maior
                <br /> veniam officiis.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <MdDesignServices className="text-5xl text-lem" />
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold"> Graphic design</h1>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
                <br /> Commodi fugiat vel maior
                <br /> veniam officiis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-5">
            <MdDesignServices className="text-5xl text-lem" />
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold"> Graphic design</h1>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
                <br /> Commodi fugiat vel maior
                <br /> veniam officiis.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <MdDesignServices className="text-5xl text-lem" />
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold"> Graphic design</h1>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
                <br /> Commodi fugiat vel maior
                <br /> veniam officiis.
              </p>
            </div>
          </div>
        </div>

        <div className="items-center relative ">
          <Image
            src="/images/0a5ee5f0ee6b01cd3888c5634232d97b.jpg"
            width={200}
            height={250}
            alt="img"
          />
          <div className="before:content-[''] before:absolute before:-top-6 before:right-0 before:w-[30vh] before:h-[50vh] before:bg-thr before:-z-10"></div>
        </div>
      </div>
    </div>
  );
}
