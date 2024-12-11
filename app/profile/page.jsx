import { getSession } from "@auth0/nextjs-auth0";
import Profile from "./profile";

export default async function ProfilePage() {
  // We need to use cookies().getAll() here, but it needs to be awaited
  const session = await getSession();
  
  if (!session) {
    return null;
  }

  const serializedSession = {
    user: {
      name: session.user.name,
      email: session.user.email,
      picture: session.user.picture,
      given_name: session.user.given_name,
    }
  };
  
  return <Profile session={serializedSession} />;
}
