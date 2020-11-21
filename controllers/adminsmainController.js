/*const db = require("../models/AdminAccount");

// Defining methods for adminAccountController
module.exports = {
    findById: function(req, res) {
        db.AdminAccount.findById(req.params.id)
        .then(dbAdminAccount => res.json(dbAdminAccount))
        .catch(err => res.status(422).json(err));
    },
};*/

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.AdminsMain
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.AdminsMain
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.AdminsMain
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.AdminsMain
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.AdminsMain
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};