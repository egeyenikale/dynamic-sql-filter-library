export const project = {
  slug: "dynamic-sql-filter-library",
  title: "Dynamic SQL Filter Library",
  description: "Reusable SQL filtering examples for text, date, numeric, and multi-select queries.",
  features: [
  "Sample database",
  "Text filters",
  "Date filters",
  "Numeric range filters",
  "Multi-select filters",
  "Query examples"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
