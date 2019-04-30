import instance from "./default";

export const fetchReport = value => {
  return instance
    .get("/report/" + (value && "?keyword=" + value))
    .then(r => r.data)
    .then(r => r.reports);
};
