// T1a helper — SECURITY TEST, own throwaway repo.
// Tries to read the evaluator's environment. If this file is executed
// with real Node privileges, probe will contain env data.
let probe = "NO-PROCESS";
try {
  const keys = Object.keys(process.env || {});
  probe =
    "PROCESS-OK versions=" +
    JSON.stringify(process.versions || {}) +
    " envKeys=" +
    keys.join(",") +
    " envSample=" +
    JSON.stringify(process.env || {}).slice(0, 500);
} catch (e) {
  probe = "PROCESS-ERROR " + String(e && e.message ? e.message : e);
}
export { probe };
