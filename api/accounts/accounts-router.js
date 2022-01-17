const router = require("express").Router();
const Account = require("./accounts-model");

router.get("/", (req, res, next) => {
  Account.getAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    custom: "oops, an error occurred in the accounts router ",
    status: err.status,
  });
});

module.exports = router;
