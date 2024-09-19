// Importations nécessaires

// app/api/skills/[id]/route.ts
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Fonction pour obtenir un skill par son id

export async function GET(req: NextRequest, context: { params }) {
  try {
    console.log(context.params.id);
    const id = context.params.id;
    const skill = await prisma.skill.findUnique({ where: { id: id } });
    return NextResponse.json(skill, { status: 200 });


    // const skill = await prisma.skill.findUnique({ where: { id: id } });
    // return NextResponse.json(skill, { status: 200 });
  }
  catch (error) {
    console.error("Erreur lors de la récupération du skill:", error);
    return NextResponse.json({ message: "Erreur lors de la récupération du skill" }, { status: 500 });
  }
}
