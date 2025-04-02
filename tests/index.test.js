import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Dynamic SQL Filter Library exposes project metadata", () => {
  assert.equal(project.slug, "dynamic-sql-filter-library");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
