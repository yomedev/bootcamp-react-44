import usersJson from "../../data/users.json";

const ALL_SKILL_VALUE = "all";

export const usersInitialState = {
  data: usersJson,
  isModalOpen: false,
  filter: {
    isAvailableChecked: false,
    skills: ALL_SKILL_VALUE,
    search: "",
  },
};
