const data = {};
data.empolyee = require("../model/data.json");

const getAllEmployees = (req, res) => {
  res.json(data.empolyee);
};

const postAllEmployees = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    "lastname ": req.body.lastname,
  });
};

const deleteEmployees = (req, res) => {
  res.json({ id: req.body.id });
};

const putAllEmployees = (req, res) => {
  res.json({
    firstname: req.body.firstname,
    "lastname ": req.body.lastname,
  });
};

const getAllEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployee,
  getAllEmployees,
  postAllEmployees,
  putAllEmployees,
  deleteEmployees,
};
