const yup = require("yup");

const Schema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(3, "between 3 and 100")
      .max(100, "between 3 and 100")
      .required("name and budget are required")
      .trim(),
    budget: yup
      .number("must be a number")
      .transform((value) => (isNaN(value) ? undefined : value))
      .min(1)
      .max(1000000, "budget of account is too large or too small")
      .positive("budget of account is too large or too small")
      .required("must be a number"),
  }),
});

module.exports = Schema;
