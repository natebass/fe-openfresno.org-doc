/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  lightSplit: "light-split",
  dark: "dark",
  darkSplit: "dark-split",
  gray: "gray",
  grayAlt: "gray-alt",
  primary: "primary",
  primaryAlt: "primary-alt",
  secondary: "secondary",
  secondaryAlt: "secondary-alt",
  /**
   * Returns the inverse of the given section type.
   * @param {string} [toInvert]
   * @returns {string}
   */
  invert: (toInvert) => {
    switch (toInvert) {
      case SectionType.light:
      case SectionType.lightSplit:
        return SectionType.dark;
      case SectionType.gray:
        return SectionType.grayAlt;
      case SectionType.grayAlt:
        return SectionType.gray;
      case SectionType.dark:
      case SectionType.darkSplit:
        return SectionType.light;
      case SectionType.primary:
        return SectionType.primaryAlt;
      case SectionType.primaryAlt:
        return SectionType.primary;
      case SectionType.secondary:
        return SectionType.secondaryAlt;
      case SectionType.secondaryAlt:
        return SectionType.secondary;
    }
  },
  /**
   * Returns the complement of the given section type.
   * @param {string} [toConvert]
   * @returns {string}
   */
  toColor: (toConvert) => {
    switch (toConvert) {
      case SectionType.light:
      case SectionType.lightSplit:
      case SectionType.primary:
      case SectionType.primaryAlt:
        return SectionType.primary;
      case SectionType.gray:
      case SectionType.grayAlt:
      case SectionType.dark:
      case SectionType.darkSplit:
      case SectionType.secondary:
      case SectionType.secondaryAlt:
        return SectionType.secondary;
    }
  },
};
