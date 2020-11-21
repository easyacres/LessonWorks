const router = require("express").Router();
const adminsmainsController = require("../../controllers/adminsmainController");

// Matches with "/api/lessonmain"
router.route("/")
  .get(adminsmainsController.findAll)
  .post(adminsmainsController.create);

// Matches with "/api/lessonmain/:id"
router
  .route("/:id")
  .get(adminsmainsController.findById)
  .put(adminsmainsController.update)
  .delete(adminsmainsController.remove);

module.exports = router;