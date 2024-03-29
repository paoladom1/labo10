const Register = require("./../models/Register");

const insert = (req, res) => {
  const student = new Register(req.body);
  student.save((error, document) => {
    if (error)
      return res.status(500).json({
        msg: "hubo un error"
      });
    return res.status(201).json({
      msg: "creado",
      register: document
    });
  });
};

const getRegister = (req, res) => {
  Register.find({}, (error, documents) => {
    if (error)
      return res.status(500).json({
        msg: "hubo un error"
      });
    return res.status(200).json({
      msg: "ok",
      registers: documents
    });
  });
};

const getOneRegister = (req, res) => {
  Register.findById(req.params.id, (error, documents) => {
    if (error)
      return res.status(500).json({
        msg: "hubo un error"
      });
    return res.status(200).json({
      msg: "ok",
      registers: documents
    });
  });
};

const deleteOneRegister = (req, res) => {
  Register.deleteOne({ _id: req.params.id }, error => {
    if (error)
      return res.status(500).json({
        msg: "error"
      });

    return res.status(200).json({
      msg: "ok"
    });
  });
};

const updateRegister = (req, res) => {
  Register.updateOne(req.body.filter, req.body.update, (error, doc) => {
    if (error)
      return res.status(500).json({
        msg: "hubo un error"
      });
    return res.status(200).json({
      msg: "ok",
      registers: doc
    });
  })
}

module.exports = {
  getRegister,
  insert,
  getOneRegister,
  deleteOneRegister,
  updateRegister
};
