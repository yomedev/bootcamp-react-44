import { FiPlus } from "react-icons/fi";

import { AvailabilityFilter } from "./AvailabilityFilter";
import { SearchInput } from "./SearchInput";
import { SkillsFilter } from "./SkillsFilter";

export const UsersFilters = ({
  onChangeAvailability,
  onChangeSkills,
  onChangeSearch,
  onResetSearch,
  filters,
}) => {
  const { isAvailableChacked, skills, search } = filters;
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilter
          isAvailableChacked={isAvailableChacked}
          onChangeAvailability={onChangeAvailability}
        />
        <SkillsFilter onChangeSkills={onChangeSkills} skillValue={skills} />
        <button type="button" className="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput
        onResetSearch={onResetSearch}
        onChangeSearch={onChangeSearch}
        search={search}
      />
    </>
  );
};
