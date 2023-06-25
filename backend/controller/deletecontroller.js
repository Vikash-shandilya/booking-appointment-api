const user = require("../model/user");

exports.deleteuser = (req, res, next) => {
  const id = req.params.productid;
  user
    .findByPk(id)
    .then((prod) => {
      return prod.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
