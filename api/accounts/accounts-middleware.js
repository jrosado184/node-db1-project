const Account = require("../accounts/accounts-model");

exports.checkAccountPayload = (schema) => async (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  try {
    await schema.validate({
      body: req.body,
    });
    return next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const { name } = req.body;
    const account = await Account.getAll();
    const accountNames = account.some((a) => a.name === name);
    if (accountNames) {
      res.status(400).json({ message: "that name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    if (!account) {
      res.status(404).json({ message: "account not found" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
