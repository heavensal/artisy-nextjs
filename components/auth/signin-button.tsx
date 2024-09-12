import { signIn } from "@/lib/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/pagingtest" })
      }}
    >
      <button type="submit">Se connecter</button>
    </form>
  )
}
