const responseBody = Object.freeze({
  service: "deploylint-release-fixture",
  status: "ready",
});

export default {
  fetch() {
    return Response.json(responseBody, {
      headers: { "cache-control": "no-store" },
    });
  },
};
