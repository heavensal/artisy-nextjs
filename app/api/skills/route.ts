// Importations nécessaires
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


// Fonction pour gérer les requêtes GET
export async function GET() {
  try {
    const skills = await prisma.skill.findMany();
    return NextResponse.json(skills, { status: 200 });

  } catch (error) {
    console.error("Error retrieving skills:", error);
    return NextResponse.json({ message: "Error retrieving skills" }, { status: 500 });
  }
}

// Fonction pour gérer les requêtes POST

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const skill = await prisma.skill.create({
      data: { name },
    });
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error("Error creating skill:", error);
    return NextResponse.json({ message: "Error creating skill" }, { status: 500 });
  }
}

// Fonction pour gérer les requêtes DELETE

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.skill.delete({ where: { id } });
    return NextResponse.json({ message: "Skill deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json({ message: "Error deleting skill" }, { status: 500 });
  }
}

// Fonction pour gérer les requêtes PATCH

export async function PATCH(req: NextRequest) {
  try {
    const { id, name } = await req.json();
    const skill = await prisma.skill.update({
      where: { id },
      data: { name },
    });
    return NextResponse.json(skill, { status: 200 });
  } catch (error) {
    console.error("Error updating skill:", error);
    return NextResponse.json({ message: "Error updating skill" }, { status: 500 });
  }
}
