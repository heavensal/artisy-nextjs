import { auth } from "@/lib/auth"
import Image from 'next/image';

export default async function UserAvatar() {
  const session = await auth();

  if (!session) return null;

  if (!session.user) return null

  return (
    <div>
      <Image src={session.user.image ?? '/default-avatar.png'} alt="User Avatar" width={100} height={100} />
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{session.user.firstName ? session.user.firstName : "Pas de prénom"}</p>
      <p>{session.user.lastName ? session.user.firstName : "Pas de nom de famille"}</p>
      <p>{session.user.role ? session.user.role : "Pas de role par défaut"}</p>

    </div>
  )
}
