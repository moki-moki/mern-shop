const middlewareError = async (error, req, res, next) => {
  console.log(error);
  return res.status(500).json({ msg: "Something went wrong" });
};

module.exports = middlewareError;
