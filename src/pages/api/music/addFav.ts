import { supabase } from "@/lib/supabase";

// Intentar usar una store para no tener que hacer fetch a la api para verificar q si es favorito

export async function GET({
  params,
  request,
  redirect,
}: {
  params: any;
  request: any;
  redirect: any;
}) {
  // get the id from the url search params

  //console.log(album_id);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userdata = await user;
  const { url } = request;

  const urlObject = new URL(url);

  const id = urlObject.searchParams.get("id");

  const trackReq = await fetch(
    `${urlObject.origin}/api/music/getTrack?id=${id}`,
  );
  const fav = await fetch(`${urlObject.origin}/api/music/getFavs`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      let isFav = false;
      data.forEach((element: any) => {
        if (element.id == id) {
          isFav = true;
        }
      });
      return isFav;
    });

  console.log(fav);

  if (fav) {
    return new Response(JSON.stringify(null), {
      headers: { "content-type": "application/json" },
    });
  }

  const track = await trackReq.json();

  //console.log(userdata);
  try {
    //console.log(userdata?.id);
    //console.log(track, track.id);
    const { data, error } = await supabase
      .from("favs")
      .insert([{ user_id: userdata?.id, song_id: track.id, data_song: track }])
      .select();

    if (error) {
      return new Response(JSON.stringify(null), {
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    console.log(error.message);
    return redirect("/signin");
  }
}
