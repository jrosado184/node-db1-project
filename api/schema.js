const yup = require("yup");

const Schema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(3, "name cannot be less than 3 characters")
      .max(100, "name cannot be more than 100 characters")
      .required("name is required")
      .trim(),
    budget: yup
      .number("budget of account must be a number")
      .min(1)
      .max(1000000)
      .positive("budget of account is too large or too small")
      .required("budget is required"),
  }),
});

module.exports = Schema;
