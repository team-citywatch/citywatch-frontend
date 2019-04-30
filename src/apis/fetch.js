import instance from "./default";

export const fetchReport = () => {
  return instance
    .get("/report")
    .then(r => r.data)
    .then(r => r.reports);
};
