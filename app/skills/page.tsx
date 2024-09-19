
'use client';
import { useState, useEffect } from 'react';
import AddSkill from '@/components/forms/AddSkill';
import Link from 'next/link';


interface Skill {
  id: string;
  name: string;
}

export default function Page() {

  const [skills, setSkills] = useState<Skill[]>([]);
  const [loadingTime, setLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      const startTime = performance.now();
      try {
        const response = await fetch("/api/skills");
        const skills = await response.json();
        console.log(skills);
        setSkills(skills);
      } catch (error) {
            console.error('Failed to fetch skills:', error);
          }
          const endTime = performance.now();
          setLoadingTime(endTime - startTime);
        }
        fetchSkills();
      }, []);

      const addSkill = async (skillName: string) => {
        try {
          const response = await fetch("/api/skills", {
            method: "POST",
            body: JSON.stringify({ name: skillName }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const newSkill = await response.json();
          console.log(newSkill);

          setSkills(prevSkills => [...prevSkills, newSkill]);
        } catch (error) {
            console.error('Failed to add skill:', error);
          }
        };

        const deleteSkill = async (id: string) => {
          try {
            const response = await fetch(`/api/skills`, {
              method: "DELETE",
              body: JSON.stringify({ id }),
              });
              const { message } = await response.json();
              console.log(message);


              setSkills(prevSkills => prevSkills.filter(skill => skill.id !== id));
            } catch (error) {
              console.error('Failed to delete skill:', error);
            }
          };

        const updateSkill = async (id: string, name: string) => {
          try {
            const response = await fetch(`/api/skills`, {
              method: "PATCH",
              body: JSON.stringify({ id, name }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const updatedSkill = await response.json();
            console.log(updatedSkill);

            setSkills(prevSkills => prevSkills.map(skill => {
              if (skill.id === id) {
                return updatedSkill;
              }
              return skill;
            }
            ));
          } catch (error) {
            console.error('Failed to update skill:', error);
          }
        }




                    return (
        <>
          <div>
              Temps de chargement : {loadingTime ? `${loadingTime.toFixed(2)} ms` : 'Chargement...'}
          </div>

            <div className='container'>

              <h1 className='text-3xl text-center'>Compétences</h1>

              <div>
                <ul className='md:w-2/3 mx-auto'>
                  {skills.map((skill) => (

                    <div key={skill.id}>

                      <li className='flex justify-between'>

                        <div>
                          <span>{skill.name}</span>
                        </div>

                        <div>


                          <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const name = formData.get('name') as string;
                            updateSkill(skill.id, name);
                          }
                          }>
                            <input type='hidden' name='id' value={skill.id} />
                            <input type='text' name='name' placeholder='Nom de la compétence' defaultValue={skill.name} required />
                            <button type='submit'>Modifier la compétence</button>
                          </form>

                          <Link href={`/skills/${skill.id}`} className='bg-blue-800 px-4 py-2 rounded font-bold'>
                            Voir
                          </Link>

                          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                           onClick={() => deleteSkill(skill.id)}>
                            Supprimer
                          </button>
                        </div>

                      </li>
                    </div>
                  ))}
                </ul>
              </div>

            </div>

            <AddSkill onAddSkill={addSkill} />
          </>
        );
  }
