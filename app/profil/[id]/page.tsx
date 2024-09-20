// app/dashboard/pro-profile/[id]/page.tsx
import { showProProfile } from "@/app/_controllers/_proProfile/actions";

interface Params {
  id: string;
}
export default async function ProProfilePage({ params } : { params: Params }) {
  const proProfile = await showProProfile(params.id)

  return (


    <div className="flow-root">
    <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
      <div
        className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
      >
        <dt className="font-medium text-gray-900 dark:text-white">Métier</dt>
        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{proProfile.profession}</dd>
      </div>

      <div
        className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
      >
        <dt className="font-medium text-gray-900 dark:text-white">Nom</dt>
        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{`${proProfile?.user.firstName} ${proProfile?.user.lastName}`}</dd>
      </div>

      <div
        className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
      >
        <dt className="font-medium text-gray-900 dark:text-white">Bio</dt>
        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{proProfile?.presentation}</dd>
      </div>

      <div
        className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
      >
        <dt className="font-medium text-gray-900 dark:text-white">Siret</dt>
        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{proProfile.siret}</dd>
      </div>

      <div
        className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
      >
        <dt className="font-medium text-gray-900 dark:text-white">Téléphone</dt>
        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
          {proProfile.phone}
        </dd>
      </div>
    </dl>
  </div>
  )
}
