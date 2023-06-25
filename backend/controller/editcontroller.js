const user = require("../model/user");

exports.submitform = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  user
    .create({
      name: name,
      email: email,
      phone: phone,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      // Redirect to an error page or handle the error appropriately
    });
};

exports.getall = (req, res, next) => {
  user
    .findAll()
    .then((filecontent) => {
      res.json(filecontent);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editform = (req, res, next) => {
  const id = req.params.productid;
  user.findByPk(id).then((prod) => {
    if (prod) {
      prod.destroy();
    } else {
      res.json(null);
    }
  });
};

exports.getuser = (req, res, next) => {
  const id = req.params.productid;
  user.findByPk(id).then((prod) => {
    res.json(prod);
  });
};
