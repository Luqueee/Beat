import { supabase } from "../../lib/supabase";

export async function GET({ params, request, redirect }) {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log("error:", error.message);
    return redirect("/signin");
  }

  return new Response(JSON.stringify(data.session), {
    headers: { "content-type": "application/json" },
  });
}
