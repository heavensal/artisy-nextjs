// app/skills/[id]/page.tsx

import Link from 'next/link';
interface Params {
  id: string;
}

export default async function SkillPage({ params }: { params: Params }) {
  const response = await fetch(`${process.env.API_URL}/skills/${params.id}`);
  const skill = await response.json();
  return (
    <div>
      <h1>{skill.name}</h1>
      <Link href="/skills" className='bg-gray-700 py-2 px-4 rounded hover:bg-gray-300'>
        Retour à la liste des compétences
      </Link>

    </div>
  )
}
