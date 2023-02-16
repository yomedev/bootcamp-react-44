const skills = [
  { value: "react", lable: "React" },
  { value: "angular", lable: "Angular" },
  { value: "vue", lable: "Vue" },
];

export const SkillsFilter = ({ onChangeSkills, skillValue }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {skills.map((skill) => (
          <div className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.lable}</span>
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
