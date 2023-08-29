import ContactInfoPart from "./ContactInfoPart";
import ImagesListPart from "./ImagesListPart";
import "./home.css";

export default function Home() {
  return (
    <div
      id="homePageSection"
      className="py-10 bg-primary flex flex-row items-center justify-center max-md-m:flex-col-reverse"
    >
      <ContactInfoPart />
      <ImagesListPart />
    </div>
  );
}
