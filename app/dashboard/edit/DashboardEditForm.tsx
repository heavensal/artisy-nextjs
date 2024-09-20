'use client'
import { updateUser } from "@/app/_controllers/_user/actions"


interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'Admin' | 'Pro' | 'Free' | 'Normal';
}

export default function DashboardEditForm({ user }: { user: User }) {
  const updateCurrentUser = updateUser.bind(null, user.id)

 return (
   <form action={updateCurrentUser}>
    <div className="">
      <label htmlFor="name">Nom sur l&apos;app</label>
      <input type="text" name="name" defaultValue={user.name} disabled />
    </div>

    <div>
      <label htmlFor="email">Adresse email</label>
      <input type="email" name="email" defaultValue={user.email} disabled />
    </div>

    <div>
      <label htmlFor="firstName">Prénom</label>
      <input type="text" name="firstName" defaultValue={user.firstName} />
    </div>

    <div>
      <label htmlFor="lastName">Nom de famille</label>
      <input type="text" name="lastName" defaultValue={user.lastName} />
    </div>

    <div>
      <label htmlFor="role">Rôle</label>
      {/* input select parmi Admin - Pro - Free - Normal */}
      <select name="role" defaultValue={user.role}>
        <option value="Admin">Admin</option>
        <option value="Pro">Pro</option>
        <option value="Free">Free</option>
        <option value="Normal">Normal</option>
      </select>

    </div>

     <button type="submit" className="px-4 py-2 bg-blue-600">Mettre à jour</button>
   </form>
 )
}
