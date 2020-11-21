/*const db = require("../models/SavedLesson");

// Defining methods for savedLessonController
module.exports = {
    findById: function(req, res) {
        db.SavedLesson.findById(req.params.id)
        .then(dbSavedLesson => res.json(dbSavedLesson))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.SavedLesson.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbSavedLesson => res.json(dbSavedLesson))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.SavedLesson.findById(req.params.id)
        .then(dbSavedLesson => dbSavedLesson.remove())
        .then(dbSavedLesson => res.json(dbSavedLesson))
        .catch(err => res.status(422).json(err));
    }
};*/