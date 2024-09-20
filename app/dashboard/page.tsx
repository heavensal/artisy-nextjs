// app/dashboard/page.tsx

import { currentUser } from "@/app/_controllers/_user/actions";
import { showMyProProfile } from "../_controllers/_proProfile/actions";
import { redirect } from "next/navigation";
import Link from 'next/link';
import SignOut from "@/components/auth/signout-button";

import Image from 'next/image';

export default async function Dashboard() {
  const current_user = await currentUser()
  if (!current_user) {
    redirect("/")
  }
  const proProfile = await showMyProProfile()

  return (
    <div>
      <Image src={current_user.image ?? '/default-avatar.png'} alt="User Avatar" width={100} height={100} />
      <p>{current_user.name}</p>
      <p>{current_user.email}</p>
      <p>{current_user.firstName ? current_user.firstName : "Pas de prénom"}</p>
      <p>{current_user.lastName ? current_user.lastName : "Pas de nom de famille"}</p>
      <p>{current_user.role ? current_user.role : "Pas de role par défaut"}</p>
      <div>
        {proProfile ? (
          <div>
            <p>{proProfile.profession}</p>
            <p>{proProfile.phone}</p>
            <p>{proProfile.siret}</p>
            <p>{proProfile.presentation}</p>
          </div>
        ) : (
          <Link href="/dashboard/pro-profile">
            Créer un profil Pro
          </Link>
        )}
      </div>
      <Link href="/skills" className='bg-gray-700 py-2 px-4 rounded hover:bg-gray-300'>
        Retour à la liste des compétences
      </Link>
      <Link href="/dashboard/edit" className='bg-blue-800 px-4 py-2 rounded font-bold'>
        Modifier le profil
      </Link>
      <Link href="/dashboard/pro-profile">
        Espace Pro
      </Link>

      <SignOut />




    </div>
  )
}
