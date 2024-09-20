import Link from 'next/link';
import Image from 'next/image';
import { signIn } from "@/lib/auth"

const Form = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="grid gap-8">
        <section
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
        >
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
              Se connecter
            </h1>
            <form action="#" method="post" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  Email (pas encore fonctionnel)
                </label>
                <input
                  id="email"
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="email"
                  placeholder="Email"
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  Password (pas encore fonctionnel)
                </label>
                <input
                  id="password"
                  className="border p-3 shadow-md dark:bg-slate-600 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="password"
                  placeholder="Mot de Passe"
                  disabled
                />
              </div>
              <a
                href="#"
                className="text-blue-400 text-sm transition hover:underline"
              >
                Mot de passe oublié?
              </a>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Connexion
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
              <p>
                Vous n&rsquo;avez pas de compte ?&nbsp;
                <a
                  href="#"
                  className="text-blue-400 transition hover:underline"
                >
                  Inscription
                </a>
              </p>
            </div>

            <form action={ async () => {
              "use server"
              await signIn("google", { redirectTo: "/dashboard" });
            }}
              id="third-party-auth"
              className="flex justify-center gap-4 mt-5"
            >
              <button type="submit" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
               <Image src="google-logo.svg" alt="Google" width={24} height={24} />
              </button>
            </form>


{/*
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="LinkedIn"
                />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img
                  className="w-6 h-6 dark:invert"
                  loading="lazy"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="GitHub"
                />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                  alt="Twitter"
                />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                  alt="Apple"
                />
              </button> */}
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                By signing in, you agree to our
                <a
                  href="#"
                  className="text-blue-400 transition hover:underline"
                >
                  Terms
                </a>
                and
                <a
                  href="#"
                  className="text-blue-400 transition hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form;
