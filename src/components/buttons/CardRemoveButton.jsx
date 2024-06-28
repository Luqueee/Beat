import { useEffect, useRef } from "react";
import { Remove } from "../songBar";

export function CardRemoveButton({ id }) {
  const handleClick = () => {
    fetch(`/api/music/removeFav?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("removeFav:", data);
        if (data.error) {
          window.location.href = "/signin";
        }
        window.location.reload();
      });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50"
    >
      <Remove />
    </button>
  );
}
