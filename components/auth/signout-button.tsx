import { signOut } from "../../lib/auth"

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <button type="submit" className="px-4 py-2 ">Sign Out</button>
    </form>
  )
}
