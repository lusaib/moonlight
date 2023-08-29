import { Link } from "react-router-dom";
import { contactInfoList } from "./Common";

export default function ContactInfoPart() {
  return (
    <section className="relative w-[50%] h-[80%] flex flex-col items-center justify-center text-white max-md-m:w-full max-md-m:h-auto max-md-m:mt-5">
      <div className=" border-b-[2px] border-b-solid border-b-white w-[70%] font-[900] text-[40px] leading-[80px] max-md-m:w-[90%] max-md-m:leading-[70px] max-md-s:w-[90%]">
        GET IN TOUCH
      </div>
      <div className="flex flex-row flex-wrap mt-10 w-[70%] gap-8 justify-between max-md-m:w-[90%] max-md-m:gap-5 ">
        {contactInfoList.map((e) => (
          <div className="w-[40%] h-[120px] flex flex-col items-start justify-start max-md-m:w-[45%] max-xs-m-500:w-[100%]">
            <h2 className="leading-[30px] text-[20px]">{e.head}</h2>
            <div className="text-white opacity-30 text-[20px] font-[400] leading-[27px] w-full flex flex-col justify-between items-start">
              {e.children.map((i , indx) => {
                const linkString =
                  e.type === "link"
                    ? i
                    : e.type === "mail"
                    ? `mailto:${i}`
                    : `tel:${i}`;
                if (e.type !== "string")
                  return (
                    <Link
                    key={`contact_list_${indx}`}
                      to={linkString}
                      className={
                        "hover:text-blue-800 hover:underline whitespace-break-spaces box-border flex-[1] "
                      }
                    >
                      {i}
                    </Link>
                  );
                return (
                  <div className="whitespace-break-spaces box-border flex-[1]">
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
