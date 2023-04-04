const express = require("express");
const router = express.Router();
const path = require("path");
const { getAllEmployees, postAllEmployees, putAllEmployees, deleteEmployees, getAllEmployee } = require("../../controllers/employeeController");



router
  .route("/")
  .get(getAllEmployees)
  .post(postAllEmployees)
  .put(putAllEmployees)
  .delete(deleteEmployees);

router.route("/:id").get(getAllEmployee);

module.exports = router;
