import defaultImg from "../assets/default-photo.png";
import Navbar from "../components/navbar";

function Gallery() {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="w-4/5 mx-auto p-5 flex flex-col gap-7">
        <div>
          <h1 className="text-xl font-medium">Gallery</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid-container w-full">
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
            <div className="shadow-lg hovering">
              <img className="w-full" src={defaultImg} alt="defaul-img" />
            </div>
          </div>
        </div>
        lg{" "}
      </div>
    </div>
  );
}

export default Gallery;
