import React, { useState } from "react";
import { Star } from "lucide-react"; // using lucide-react icons

interface RatingProps {
  maxStars?: number;
  value: number; // controlled value
  onChange: (value: number) => void;
  size?: number; // star size
}

const Rating: React.FC<RatingProps> = ({
  maxStars = 5,
  value,
  onChange,
  size = 32
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  // function to render filled/half/empty star
  const renderStar = (index: number) => {
    const displayValue = hoverValue ?? value;
    const starValue = index + 1;

    let fill = "none"; // default empty
    if (displayValue >= starValue) {
      fill = "gold"; // full star
    } else if (displayValue >= starValue - 0.5) {
      fill = "url(#half)"; // half star
    }

    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="cursor-pointer"
        onMouseMove={e => {
          const { left, width } = (
            e.target as SVGElement
          ).getBoundingClientRect();
          const x = e.clientX - left;
          const isHalf = x < width / 2;
          setHoverValue(isHalf ? index + 0.5 : index + 1);
        }}
        onMouseLeave={() => setHoverValue(null)}
        onClick={() => onChange(hoverValue ?? index + 1)}
      >
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="gold" />
            <stop offset="50%" stopColor="lightgray" />
          </linearGradient>
        </defs>
        <path
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.729 1.548 8.286L12 18.896l-7.484 4.425 1.548-8.286-6.064-5.729 8.332-1.151z"
          fill={fill === "none" ? "lightgray" : fill}
        />
      </svg>
    );
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }, (_, i) => renderStar(i))}
    </div>
  );
};

export default Rating;
