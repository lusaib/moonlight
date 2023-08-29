import { ImagePlaceholder } from "../../components";

export default function ImagesListPart() {
  return (
    <section className="w-[50%] h-full flex flex-col max-md-m:flex-col-reverse max-md-m:w-[90%] ">
      <div className="border-box">
        <div className="border-box-items items-start ">
          <div className="border-box-individual-items ">
            <ImagePlaceholder
              imageProps={{
                src: "",
                alt: "First Image",
              }}
            />
          </div>
          <div className="border-box-individual-items flex items-end max-md:hidden">
            <div className="w-full h-[20%] bg-white" />
          </div>
        </div>
        <div className="border-box-items items-end">
          <div className="border-box-individual-items  ">
            <ImagePlaceholder
              imageProps={{
                src: "",
                alt: "First Image",
              }}
            />
          </div>
          <div className="border-box-individual-items  ">
            <ImagePlaceholder
              imageProps={{
                src: "",
                alt: "First Image",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 max-md-m:mt-0 max-md-m:mb-10">
        <h1 className="text-[6em] font-[1000] text-white leading-[90px] max-sm:text-[5em]  max-xs-m-500:text-[4em] max-xs-m:text-[3em] max-xs-m:leading-[50px] max-xs-s:text-[2em] max-xs-s:leading-[40px] max-xs:text-[1em] max-xs:leading-[20px] max-lg:text-[3.99em] max-xl:text-[4.5em]">
          MOONLIGHT
        </h1>
        <h4
          className="text-white font-[400] text-[30px] max-sm:text-[25px] max-xs-m-500:text-[20px] max-xs-m:text-[18px] max-xs-s:text-[13px] max-xs:text-[10px] max-lg:text-[20px] max-xl:text-[25px]"
        >
          ARCHITECTURE&nbsp;AND&nbsp;INTERIOR&nbsp;DESIGN
        </h4>
      </div>
    </section>
  );
}
