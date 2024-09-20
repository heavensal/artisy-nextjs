
import SigninBtn from '@/components/auth/SignInBtn';
import { allProProfiles } from './_controllers/_proProfile/actions';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const proProfiles = await allProProfiles()
  return (

   <div>

      <SigninBtn/>
      <h1 className='text-center text-2xl'>
        Tous les professionnels
      </h1>


      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 p-4">
        {proProfiles.map((proProfile) => (

        <Link key={proProfile.id} href={`/profil/${proProfile.id}`}>
          <li className="flex flex-col items-center bg-slate-800 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-40 bg-gray-300">

                <Image
                  src={proProfile.user.image ?? '/default-avatar.png'}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="h-full w-full object-cover"
                  />
              </div>
              <div className="p-4 flex-1 flex flex-col items-center justify-between">
                <h3 className="text-lg font-semibold text-center">{proProfile.user.firstName}</h3>
                <p className="text-sm text-gray-600 text-center">{proProfile.profession}</p>
              </div>
          </li>
        </Link>
        ))}
      </ul>

   </div>
  );
}
