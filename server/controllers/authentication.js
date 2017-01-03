exports.signup = function(req, res, next) {
  //See if a user with the given email exists
  const email = req.body.email;
  const password = req.body.pass;

  User.findOne({ email: email}, function(err, existingUser) {
    if (err) { return next(err) }
    //If a user with email exisits, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }
  
    //If a user with email does NOT exisit, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err) }

      //Respond to requst indicating the user has been created
      res.json({success: true})
    });

  });
}