import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore)=>{
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies:{
                getAll(){
                    return cookieStore.getAll()
                },
                setAll(cookieToSet){
                    try {
                        cookieToSet.forEach(({name, value, options})=>
                        cookieStore.set(name,value,options))
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                }
            }
        }
    )
}