const router = require("express").Router();
const Account = require("./accounts-model");
const Schema = require("../schema");
const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require("./accounts-middleware");

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

router.post(
  "/",
  checkAccountPayload(Schema),
  checkAccountNameUnique,
  (req, res, next) => {
    let { name, budget } = req.body;
    name = name.trim();
    Account.create({ name, budget }).then((data) => {
      Account.getById(data)
        .then((newData) => {
          res.status(201).json(newData);
        })
        .catch(next);
    });
  }
);

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload(Schema),
  checkAccountNameUnique,
  (req, res, next) => {
    const { name, budget } = req.body;
    const { id } = req.params;
    Account.updateById(id, { name, budget })
      .then((data) => {
        Account.getById(id).then((newData) => {
          res.json(newData);
        });
      })
      .catch(next);
  }
);

router.delete("/:id", checkAccountId, (req, res, next) => {
  Account.deleteById(req.params.id)
    .then((data) => {
      Account.getAll(data).then((newData) => {
        res.json(newData);
      });
    })
    .catch(next);
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
