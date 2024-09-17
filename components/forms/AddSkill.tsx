// components/forms/AddSkillForm.tsx
'use client';

interface Props {
  onAddSkill: (skillName: string) => void;
}

const AddSkill: React.FC<Props> = ({ onAddSkill }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const skillName = formData.get('name') as string;
    onAddSkill(skillName);
    e.currentTarget.reset(); // Reset form fields after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nom de la compétence" required />
      <button type="submit">Ajouter la compétence</button>
    </form>
  );
};

export default AddSkill;
