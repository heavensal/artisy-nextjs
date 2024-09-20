import { signIn } from "@/lib/auth"
import Image from 'next/image'



export default function SignIn() {

  return (
    <form className="flex justify-center" action={ async () => {
      "use server"
      await signIn("google", { redirectTo: "/dashboard" });
    }}>
      <button type="submit" className="flex justify-between gap-4 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow transition duration-150">
        <Image className="w-6 h-6" src="/google-logo.svg" loading="lazy" alt="Logo de connexion Google" width={50} height={50}/>
        <span>
          Se connecter avec Google
        </span>
      </button>
    </form>

  )
}
