import { auth } from "@/lib/auth"
import DashboardEditForm from "./DashboardEditForm"

export default async function EditDashboard() {
 const session = await auth()
 if (!session?.user) {
   return <div>Non authentifié</div>
 }

 return (
   <div>
     <h1>Modifier le profil</h1>
     <DashboardEditForm user={session.user} />
   </div>
 )
}
