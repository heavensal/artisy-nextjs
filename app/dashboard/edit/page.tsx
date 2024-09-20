
import { currentUser } from "@/app/_controllers/_user/actions";
import DashboardEditForm from "./DashboardEditForm"

export default async function EditDashboard() {
  const current_user = await currentUser()
 return (
   <div>
     <h1>Modifier le profil</h1>
     <DashboardEditForm user={current_user} />
   </div>
 )
}
