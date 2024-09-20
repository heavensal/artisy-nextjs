// Actions pour le user connecté
// Prisma pour les requêtes à la base de données - plus d'API
"use server"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"

export async function currentUser() {
  const currentSession = await auth()
  if (!currentSession) return null;
  if (!currentSession.user) return null
  const user = await prisma.user.findUnique({
    where: {
      id: currentSession.user.id
    }
  })
  return user
}

export async function updateUser(id: string, formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const role = formData.get('role') as string;
    await prisma.user.update({
      where: {
        id: id
      },
      data: {
        firstName,
        lastName,
        role
      }
    })
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
  }
  redirect("/dashboard")
}
