"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


// CREATE
async function CreateSkill(formData: FormData) {
  await prisma.skill.create({
    data: {
      name: formData.get('name') as string
    },
  });
  revalidatePath('/skills');
}
export default CreateSkill;


// READ
async function GetSkills() {
  const skills = await prisma.skill.findMany();
  return skills;
}
export { GetSkills };


async function GetOneSkill(id: string) {

  const skill = await prisma.skill.findUnique(
    {
      where: {
        id: id,
      },
    }
  );

  return skill;
}
export { GetOneSkill };

// UPDATE
async function UpdateSkill(formData: FormData) {
  const skill = await prisma.skill.update({
    where: {
      id: formData.get('id') as string,
    },
    data: {
      name: formData.get('name') as string
    },
  });
  return skill
}
export { UpdateSkill };
