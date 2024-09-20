// form pour créer un proprofile
// app/dashboard/pro-profile/page.tsx

import { createProProfile } from "@/app/_controllers/_proProfile/actions";

export default async function ProProfile() {

  return (
    <div>
      <h1>Créer un profil Professionnel</h1>
      <form action={createProProfile}>
        <div>
          <label htmlFor="profession">Métier</label>
          <input type="text" name="profession" required />
        </div>

        <div>
          <label htmlFor="phone">Téléphone</label>
          <input type="tel" name="phone" required />
        </div>

        <div>
          <label htmlFor="siret">Siret</label>
          <input type="text" name="siret" required />
        </div>

        <div>
          <label htmlFor="presentation">Présentation</label>
          <textarea name="presentation" required />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600">Créer le profil</button>
      </form>
    </div>
  )
}
