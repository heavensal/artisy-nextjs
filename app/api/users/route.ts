// Importations nécessaires

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Fonction pour gérer les requêtes GET
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error retrieving users:", error);
    return NextResponse.json({ message: "Error retrieving users" }, { status: 500 });
  }
}

// Tu peux également ajouter d'autres méthodes HTTP si nécessaire, par exemple:
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   // logique pour gérer une requête POST
// }
