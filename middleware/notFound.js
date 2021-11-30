const notFound = (req, res) => res.status(404).send("Route was not Found");

module.exports = notFound;
