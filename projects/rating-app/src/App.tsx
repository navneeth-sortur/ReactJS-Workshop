import { useState } from "react";
import Rating from "./Rating";

export default function App() {
  const [rating, setRating] = useState(2.5);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Rate your experience</h1>
      <Rating value={rating} onChange={setRating} />
      <p className="mt-2">Your rating: {rating}</p>
    </div>
  );
}
