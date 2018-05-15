export function generateTitle(title) {
  const hasKey = this.$te("page." + title);
  const translatedTitle = this.$t("page." + title);

  if (hasKey) {
    return translatedTitle;
  }
  return title;
}
