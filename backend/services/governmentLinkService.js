const governmentLinks = require("../data/governmentLinks");

const getGovernmentLink = (service) => {
  if (!service) return null;

  const key = service.toLowerCase().trim();

  return (
    governmentLinks[key] ||
    "https://www.india.gov.in"
  );
};

module.exports = {
  getGovernmentLink,
};