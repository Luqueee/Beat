import { supabase } from "@/lib/supabase";

export async function GET({ params, request }: { params: any; request: any }) {
  // get the id from the url search params
  const { url } = request;
  const urlObject = new URL(url);
  const origin = urlObject.origin;

  const id = urlObject.searchParams.get("id");
  const album = urlObject.searchParams.get("album");
  //console.log(id);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  ////console.log(user);
  if (user) {
    ////console.log(user.id);
    ////console.log(album_id, user.id, dataSong);

    //console.log({
      user_id: user.id,
      id: id,
    });

    const { error } = await supabase
      .from("albums")
      .delete()
      .eq("song_id", id)
      .eq("user_id", user.id)
      .eq("album_id", album);

    if (error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response(JSON.stringify({ data: "success" }));
  } else {
    return new Response("no user found", { status: 500 });
  }
}
