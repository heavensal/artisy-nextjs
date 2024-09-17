"use server";
import CreateSkill from "../controllers/SkillsController"

const CreateSkillForm = () => {
  return (
    <form action={CreateSkill}>
      <input type="text" name="name" placeholder="Nom de la compétence" required />
      <button type="submit">Ajouter la compétence</button>
    </form>
  )
}
export default CreateSkillForm
