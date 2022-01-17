const db = require("../../data/db-config");

const getAll = async () => {
  return db("accounts");
};

const getById = async (id) => {
  // DO YOUR MAGIC
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  return db("accounts").insert(account);
};

const updateById = async (id, account) => {
  return db("accounts").update(account).where("id", id).first();
};

const deleteById = async (id) => {
  return db("accounts").del(id).where("id", id);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
