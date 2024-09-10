import Image from "next/image";
import First from "./First";

export default function () {
  return (
    <div className="py-[5.56vh] px-12 h-screen">
      <First title="About" subtitle="less is more work" />
      <div className="pt-12">
        <div className="relative grid grid-cols-2">
          <div>
            <Image
              src="/images/pc-2457169_640.jpg"
              width={300}
              height={300}
              alt="img"
              className="w-[40vh] h-[50vh]"
            />
            <div className="before:content-[''] before:absolute before:-top-6 before:left-0 before:w-[10vh] before:h-[58vh] before:bg-thr before:-z-10"></div>
            <div className="relative">
              {/* <div className="after:content-[''] after:absolute after:-top-6 after:right-60 after:w-[10vh] after:h-[50vh] after:bg-thr after:border-l-4 after:border-b-10 after:border-black"></div> */}
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
              fuga sunt dignissimos possimus voluptas soluta amet magnam
              corrupti commodi, minus doloribus, excepturi labore obcaecati
              inventore quasi eum quis. Recusandae, distinctio.
            </p>
            <div className="w-full py-2 bg-lem"></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              iusto, sint necessitatibus molestiae laborum unde tempora ullam
              reiciendis, aliquam aliquid minima esse quae harum! Vero
              asperiores dolor beatae recusandae illum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
