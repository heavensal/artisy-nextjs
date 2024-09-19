'use client'

export default function DashboardEditForm({ user }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data);

    const response = await fetch("/api/current_user", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const updatedUser = await response.json()
    console.log(updatedUser)
  }

 return (
   <form onSubmit={handleSubmit}>

    <input type="hidden" name="id" value={user.id} />

    <div className="">
      <label htmlFor="name">Nom sur l'app</label>
      <input type="text" name="name" defaultValue={user.name} disabled />
    </div>

    <div>
      <label htmlFor="email">Adresse email</label>
      <input type="email" name="email" defaultValue={user.email} disabled />
    </div>

    <div>
      <label htmlFor="name">Prénom</label>
      <input type="text" name="firstName" defaultValue={user.firstName} />
    </div>

    <div>
      <label htmlFor="name">Nom de famille</label>
      <input type="text" name="lastName" defaultValue={user.lastName} />
    </div>

    <div>
      <label htmlFor="name">Rôle</label>
      <input type="text" name="role" defaultValue={user.role} />
    </div>

     <button type="submit" className="px-4 py-2 bg-blue-600">Mettre à jour</button>
   </form>
 )
}
