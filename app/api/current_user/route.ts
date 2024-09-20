import { auth } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function GET() {
 const currentSession = await auth()
 if (currentSession) {
   // Utilisez les données de session ici
   return Response.json({ user: currentSession.user })
 } else {
   return Response.json({ error: "Non authentifié" }, { status: 401 })
 }
}

// Mettre à jour les informations de l'utilisateur connecté


export async function PATCH(req: NextRequest) {
  try {
    const { id, firstName, lastName, role } = await req.json();
    const user = await prisma.user.update({
      where: { id },
      data: { firstName, lastName, role },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la compétence:", error);
    return NextResponse.json({ message: "Erreur lors de la mise à jour de la compétence" }, { status: 500 });
  }
}
