import React from "react";
import { useState, useEffect } from "react";

export const CardSongPlaylist = ({ song }) => {
  const handleClick = (e) => {
    window.location.href = `/`;
  };

  console.log(song);

  return (
    <tr class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300 relative">
      <div className=" ">
        <td class="px-4 py-2 flex gap-3">
          <a href="/" className=" absolute w-full bg-blue h-20 top-0 mr-8"></a>
          <picture class="">
            <img
              src={`https://img.youtube.com/vi/${song.song_id}/mqdefault.jpg`}
              alt={song.data_song.title}
              class="rounded-md shadow-md h-16 w-16 object-cover"
              draggable="false"
            />
          </picture>
          <div class="flex flex-col">
            <h3 class="text-white text-base font-normal z-50">
              <a href="/">{song.data_song.title}</a>
            </h3>
            <span>
              {song.data_song.artists.map((artist) => artist.name).join(", ")}
            </span>
          </div>
        </td>
        <td class="px-4 py-2">{song.data_song.album}</td>
        <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">
          {song.data_song.duration.label}
        </td>
      </div>
    </tr>
  );
};
