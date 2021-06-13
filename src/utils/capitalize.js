/* Takes in a string and changes the first letter to a capital */
export const capitalizeFirstLetter = string => {
  if (!string) {
    return null;
  }

  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};
