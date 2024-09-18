
import UpdateSkill from "@/app/controllers/SkillsController"


const UpdateSkillForm = ({skill}) => {


  return (

    <form action={UpdateSkill}>
      {console.log(skill.name)}
      <input type="text" name="name" placeholder="Nom de la compétence" defaultValue={skill.name} required />
      <button type="submit">Modifier la compétence</button>
    </form>

  )
}
export default UpdateSkillForm;
