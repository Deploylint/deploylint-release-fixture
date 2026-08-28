import assert from "node:assert/strict";
import test from "node:test";
import worker from "../src/index.js";

test("returns bounded fixture readiness", async () => {
  const response = await worker.fetch();

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), {
    service: "deploylint-release-fixture",
    status: "ready",
  });
});
