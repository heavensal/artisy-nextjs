// Importations nécessaires
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Fonction pour obtenir tous les skills
export async function GET() {
  try {
    const skills = await prisma.skill.findMany();
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la récupération des compétences' }, { status: 500 });
  }
}

// Fonction pour créer un skill
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const skill = await prisma.skill.create({ data: { name } });
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la création de la compétence' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, name } = await req.json();
    const skill = await prisma.skill.update({
      where: { id },
      data: { name },
    });
    return NextResponse.json(skill, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la compétence:", error);
    return NextResponse.json({ message: "Erreur lors de la mise à jour de la compétence" }, { status: 500 });
  }
}



export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const skill = await prisma.skill.delete({ where: { id } });
    return NextResponse.json({ message: skill.name + "Compétence supprimée avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json({ message: "Erreur lors de la suppression de la compétence" }, { status: 500 });
  }
}
