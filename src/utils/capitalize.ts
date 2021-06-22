type CapitalizeHelper = (word: string) => string;

export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
