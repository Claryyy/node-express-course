const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //always always either you terminate by sending back your own response or you pass it on to the next middleware
  next();
};

module.exports = logger;
