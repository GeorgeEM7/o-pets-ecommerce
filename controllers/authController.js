function getSignup(req, res) {
  res.render("customer/auth/signup")
}

function getLogin(req, res) {
  // res.render()
}

module.exports = { 
  getSignup: getSignup, 
  getLogin: getLogin,
};
