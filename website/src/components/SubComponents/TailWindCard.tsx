//React imports
import { ReactNode } from "react";

//CSS imports
import "../../index.css";

type CardTypeProps = {
  children: ReactNode;
  imgSrc: string;
};

//Renders the inner layer of the tailwind card
const TailWindCard: React.FC<CardTypeProps> = ({ imgSrc, children, ...props }) => {
  const shouldAnimate = true;

  return (
    <div
      {...props}
      className="relative max-w-sm max-h-11 card-div  overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={imgSrc}
        alt=""
        className="transition-transform group-hover:scale-110 transform duration-200 max-w-sm tailwind-card-image"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div
          className={`p-4 text-white ${shouldAnimate ? "animate__animated animate__fadeInUp" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TailWindCard;
