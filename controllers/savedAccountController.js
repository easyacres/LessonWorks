/*const db = require("../models/savedAccount");

// Defining methods for savedAccountController
module.exports = {
    findById: function(req, res) {
        db.SavedAccount.findById(req.params.id)
        .then(dbSavedAccount => res.json(dbSavedAccount))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.SavedAccount.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbSavedAccount => res.json(dbSavedAccount))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.SavedAccount.findById(req.params.id)
        .then(dbSavedAccount => dbSavedAccount.remove())
        .then(dbSavedAccount => res.json(dbSavedAccount))
        .catch(err => res.status(422).json(err));
    }
};*/