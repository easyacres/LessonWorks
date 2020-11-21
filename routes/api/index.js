const router = require("express").Router();
const lessonmainRoutes = require("./lessonmain");
const adminmainRoutes = require("./adminmain");
// const newAccount = require("./NewAccount");
// const newLesson = require("./NewLesson");
// const savedAccount = require("./SavedAccount");
// const savedLesson = require("./SavedLesson");

// Lesson routes
router.use("/lessonmain", lessonmainRoutes);
router.use("/adminmain", adminmainRoutes)

/*
// AdminAccount routes
router.use("/AdminAccount", adminAccount);

// NewAccount routes
router.use("/NewAccount", newAccount);

// NewLesson routes
router.use("/NewLesson", newLesson);

// SavedAccount routes
router.use("/SavedAccount", savedAccount);

// SavedLesson routes
router.use("/SavedLesson", savedLesson);

*/
module.exports = router;