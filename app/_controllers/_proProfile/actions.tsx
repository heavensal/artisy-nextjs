// actions pour créer un proprofile
"use server";

import { currentUser } from "@/app/_controllers/_user/actions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createProProfile(formData: FormData) {
  const current_user = await currentUser()
  const id = current_user.id
  try {
    const { profession, phone, siret, presentation } = Object.fromEntries(formData.entries());
    await prisma.proProfile.create({
      data: {
        profession,
        phone,
        siret,
        presentation,
        user: {
          connect: {
            id: id
          }
        }
      }
    })
  } catch (error) {
    console.error("Erreur lors de la création du profil Pro:", error);
  }
  redirect("/dashboard")
}

export async function showMyProProfile() {
  const current_user = await currentUser()
  try {
    const proProfile = await prisma.proProfile.findFirst({
      where: {
        userId: current_user.id
      }
    })
    return proProfile

  } catch (error) {
    console.error("Erreur lors de la récupération du profil Pro:", error);
  }
}

// afficher tous les proprofiles pour les users
export async function allProProfiles() {
  try {
    const proProfiles = await prisma.proProfile.findMany({
      include: {
        user: true
      }
    })
    return proProfiles

  } catch (error) {
    console.error("Erreur lors de la récupération des profils Pro:", error);
  }
}

// afficher un proprofile
export async function showProProfile(id: string) {
  try {
    const proProfile = await prisma.proProfile.findUnique({
      where: {
        id: id
      },
      include: {
        user: true
      }
    })
    return proProfile

  } catch (error) {
    console.error("Erreur lors de la récupération du profil Pro:", error);
  }
}
