const router = require("express").Router();
const Account = require("./accounts-model");
const { checkAccountId } = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  Account.getAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Account.getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
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
