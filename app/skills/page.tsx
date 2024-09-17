import prisma from "@/lib/prisma";
import Link from 'next/link';

import CreateSkillForm from "./CreateSkillForm";

export default async function SkillsPage() {

  const skills = await prisma.skill.findMany();


  return (
    <div>
      <h1>Skills</h1>

      <div>
        <CreateSkillForm/>
      </div>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} --- {skill.id} --- <Link href={`/skills/${skill.id}`}>VOIR</Link>
          </li>
        ))}

      </ul>
    </div>
  );
}
// 'use client';
// import { useState, useEffect } from 'react';
// import AddSkill from '@/components/forms/AddSkill';


// interface Skill {
  //   id: number;
  //   name: string;
  // }

  // export default function Page() {

  //   const [skills, setSkills] = useState<Skill[]>([]);
  //   const [loadingTime, setLoadingTime] = useState<number | null>(null);

  //   useEffect(() => {
    //     const fetchSkills = async () => {
      //       const startTime = performance.now();
      //       try {
        //         const response = await fetch("http://localhost:3000/api/skills");
        //         const skills = await response.json();
        //         console.log(skills);

        //         setSkills(skills);
        //       } catch (error) {
          //         console.error('Failed to fetch skills:', error);
          //       }
          //       const endTime = performance.now();
          //       setLoadingTime(endTime - startTime);
          //     }
          //     fetchSkills();
          //   }, []);

          //   const addSkill = async (skillName: string) => {
            //     try {
              //       const response = await fetch("http://localhost:3000/api/skills", {
                //         method: "POST",
                //         body: JSON.stringify({ name: skillName }),
                //         headers: {
                  //           "Content-Type": "application/json",
                  //         },
                  //       });
                  //       const newSkill = await response.json();
                  //       console.log(newSkill);

                  //       setSkills(prevSkills => [...prevSkills, newSkill]);
                  //     } catch (error) {
                    //       console.error('Failed to add skill:', error);
                    //     }
                    //   };

                    //   return (
                      //     <>
                      //       <div>
                      //           Temps de chargement : {loadingTime ? `${loadingTime.toFixed(2)} ms` : 'Chargement...'}
                      //       </div>
                      //       <ul>
                      //         {skills.map((skill) => (
                        //           <div key={skill.id}>
                        //             <li>{skill.name} --- {skill.id}</li>
                        //           </div>
                        //         ))}
                        //       </ul>
                        //       <AddSkill onAddSkill={addSkill} />
                        //     </>
                        //   );
                        // }
