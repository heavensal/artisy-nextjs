// app/dashboard/page.tsx

import Link from 'next/link';

// interface Params {
//   id: string;
// }

// export default async function SkillPage({ params }: { params: Params }) {
//   const response = await fetch(`${process.env.API_URL}/skills/${params.id}`);
//   const skill = await response.json();
//   return (
//     <div>
//       <h1>{skill.name}</h1>
//       <Link href="/skills" className='bg-gray-700 py-2 px-4 rounded hover:bg-gray-300'>
//         Retour à la liste des compétences
//       </Link>

//     </div>
//   )
// }

// afficher le dashboard, avec l'utilisateur connecté

// export default async function Dashboard() {
//   const response = await fetch(`${process.env.API_URL}/current_user`);
//   const user = await response.json();
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h1>{user.email}</h1>

//       <Link href="/skills" className='bg-gray-700 py-2 px-4 rounded hover:bg-gray-300'>
//         Retour à la liste des compétences
//       </Link>

//     </div>
//   )
// }

import { auth } from "@/lib/auth"
import Image from 'next/image';

export default async function Dashboard() {
  const session = await auth();

  if (!session) return null;

  if (!session.user) return null

  return (
    <div>
      <Image src={session.user.image ?? '/default-avatar.png'} alt="User Avatar" width={100} height={100} />
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{session.user.firstName ? session.user.firstName : "Pas de prénom"}</p>
      <p>{session.user.lastName ? session.user.lastName : "Pas de nom de famille"}</p>
      <p>{session.user.role ? session.user.role : "Pas de role par défaut"}</p>
      <Link href="/skills" className='bg-gray-700 py-2 px-4 rounded hover:bg-gray-300'>
    Retour à la liste des compétences
  </Link>

    </div>
  )
}
