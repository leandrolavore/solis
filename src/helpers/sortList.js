export const sortList = (sortOption, list) => {
  let sortedUsers;

  switch (sortOption) {
    case "id-asc":
      sortedUsers = list.sort((a, b) => a.UserId - b.UserId);
      break;
    case "id-desc":
      sortedUsers = list.sort((a, b) => b.UserId - a.UserId);
      break;
    case "username-asc":
      sortedUsers = list.sort((a, b) => a.Username.localeCompare(b.Username));
      break;
    case "username-desc":
      sortedUsers = list.sort((a, b) => b.Username.localeCompare(a.Username));
      break;
    default:
      sortedUsers = list;
  }

  return sortedUsers;
};
