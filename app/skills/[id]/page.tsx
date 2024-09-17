import { GetOneSkill } from "@/app/controllers/SkillsController";
import UpdateSkillForm from "@/app/skills/[id]/UpdateSkillForm";


async function ShowSkillPage( { params } ) {
  const skill = await GetOneSkill( params.id );
  return (
    <div>
      <h1>{skill?.name}</h1>
      <p>{skill?.id}</p>
      <UpdateSkillForm skill={skill} />
    </div>
  );
}
export default ShowSkillPage;
