// Importations nécessaires
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Initialisation de PrismaClient
const prisma = new PrismaClient();
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
    const skill = await prisma.skill.create({
      data: req.body,
    });
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error("Error creating skill:", error);
    return NextResponse.json({ message: "Error creating skill" }, { status: 500 });
  }
}
