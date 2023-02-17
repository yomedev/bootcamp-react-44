const skills = [
  { value: 'all', label: 'All' },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

export const SkillsFilter = ({ onChangeSkills, skillValue }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {skills.map((skill) => (
          <div key={skill.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.label}</span>
              <input
                className="form-check-input"
                checked={skillValue === skill.value}
                value={skill.value}
                type="radio"
                name="skill"
                onChange={onChangeSkills}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
