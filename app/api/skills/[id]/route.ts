// Importations nécessaires
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Fonction GET pour récupérer une compétence spécifique par son id
export async function GET(req: NextRequest) {
  // Extraction de l'id de la compétence depuis la query string
  const skillId = req.query.id;

  try {
    // Recherche de la compétence en base de données en utilisant l'id
    const skill = await prisma.skill.findUnique({
      where: { id: parseInt(skillId) } // Assurez-vous de convertir l'id en un nombre si nécessaire
    });

    // Si aucune compétence n'est trouvée, retourner une réponse 404
    if (!skill) {
      return new NextResponse(JSON.stringify({ message: "Skill not found" }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Retourne la compétence trouvée avec un statut 200
    return new NextResponse(JSON.stringify(skill), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error("Error retrieving skills:", error);
    // Retourne un message d'erreur avec un statut 500 en cas d'erreur du serveur
    return new NextResponse(JSON.stringify({ message: "Error retrieving one skill" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
