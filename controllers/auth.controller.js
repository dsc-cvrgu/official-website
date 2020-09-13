const User = require("../models/user");
const expressJwt = require("express-jwt");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
require("../helpers/passport")(passport);

// error handler for db errors
const { errorHandler } = require("../helpers/dbErrorHandling");
// mailer
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAIL_KEY);

exports.registerController = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({
    email,
  }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
  });
  // =====================================
  console.log(name, email, password);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.log("error from bcrypt", err);
      }
      const nuser = new User({
        name: name,
        email: email,
        password: hash,
      });
      // save user
      nuser
        .save()
        .then((user) => {
          console.log("this is user " + user);
          return res.json({
            message: "You are now registered and can login.",
          });
        })
        .catch((err) => {
          console.log("this is from save catch " + err);
          return res.status(401).json({
            error: errorHandler(err),
          });
        });
    });
  });
  // =====================================
  // generate token
  // const token = jwt.sign(
  //   {
  //     name,
  //     email,
  //     password,
  //   },
  //   process.env.JWT_ACCOUNT_ACTIVATION,
  //   {
  //     expiresIn: "15m",
  //   }
  // );
  // // sending activation email
  // const emailData = {
  //   from: process.env.EMAIL_FROM,
  //   to: email,
  //   subject: "Account activation link",
  //   html: `<h1>Please click on the link to activate</h1>
  //     <a href="${process.env.CLIENT_URL}/users/activate/${token}" type="button"><button>Click here</button></a>
  //     <p>This email contains sensitive information</p>
  //     <p>Expires in 15m</p>
  //     `,
  // };

  // (async () => {
  //   try {
  //     await sgMail
  //       .send(emailData)
  //       .then((sent) => {
  //         return res.json({
  //           message: `Email has been sent to ${email}`,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return res.status(400).json({
  //           error: errorHandler(err),
  //         });
  //       });
  //   } catch (error) {
  //     console.error(error);

  //     if (error.response) {
  //       console.error(error.response.body);
  //     }
  //   }
  // })();
};

exports.activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log("Activation error");
        console.log(err);
        return res.status(401).json({
          error: "Expired link. Signup again",
        });
      } else {
        // ==============================
        const { name, email, password } = jwt.decode(token);
        console.log(name, email, password);
        let newUser = new User({
          name,
          email,
          password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              console.log("error from bcrypt", err);
            }
            newUser.password = hash;
            // save user
            newUser
              .save()
              .then((user) => {
                console.log("this is user " + user);
                return res.json({
                  message: "You are now registered and can login.",
                });
              })
              .catch((err) => {
                console.log("this is from save catch " + err);
                return res.status(401).json({
                  error: errorHandler(err),
                });
              });
          });
        });
        // User.register({ username: email }, password, function (err, user) {
        //   if (err) {
        //     console.log(err);
        //     res.status(401).json({
        //       error: errorHandler(err),
        //     });
        //   } else {
        //     passport.authenticate("local")(req, res, function () {
        //       return res.json({
        //         message: "Signup Success",
        //       });
        //     });
        //   }
        // });
        // ============================================
        // const user = new User({
        //   name: name,
        //   email: email,
        //   password: password,
        // });

        // user.save((err, user) => {
        //   if (err) {
        //     console.log("Save error", errorHandler(err));
        //     return res.status(401).json({
        //       errors: errorHandler(err),
        //     });
        //   } else {
        //     return res.json({
        //       success: true,
        //       message: "Signup success",
        //     });
        //   }
        // });
      }
    });
  } else {
    return res.json({
      message: "error happening please try again",
    });
  }
};

exports.signinController = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) res.status(401).json({ error: err });
    // return res.status(401).json({ error: err });
    if (!user) res.status(401).json({ error: info.message });
    //  res.send("no user exists");
    else {
      req.logIn(user, (err) => {
        if (err) res.status(401).json({ error: err });
        console.log(req.user);
        res.status(200).json({
          message: "logged in",
        });
      });
    }
  })(req, res, next);
};

exports.forgotPasswordController = (req, res) => {
  const { email } = req.body;

  User.findOne(
    {
      email,
    },
    (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User with that email does not exist",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_RESET_PASSWORD,
        {
          expiresIn: "10m",
        }
      );

      const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Password Reset link`,
        html: `
                    <h1>Please use the following link to reset your password</h1>
                    <a href="${process.env.CLIENT_URL}/users/resetpassword/${token}">Click here</a>
                    <hr />
                    <p>This email may contain sensetive information</p>
                `,
      };

      return user.updateOne(
        {
          resetPasswordLink: token,
        },
        (err, success) => {
          if (err) {
            console.log("RESET PASSWORD LINK ERROR", err);
            return res.status(400).json({
              error:
                "Database connection error on user password forgot request",
            });
          } else {
            sgMail
              .send(emailData)
              .then((sent) => {
                // console.log('SIGNUP EMAIL SENT', sent)
                return res.json({
                  message: `Email has been sent to ${email}. Follow the instruction to activate your account`,
                });
              })
              .catch((err) => {
                // console.log('SIGNUP EMAIL SENT ERROR', err)
                return res.json({
                  message: err.message,
                });
              });
          }
        }
      );
    }
  );
};

exports.resetPasswordController = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  // if (!errors.isEmpty()) {
  //   const firstError = errors.array().map((error) => error.msg)[0];
  //   return res.status(422).json({
  //     errors: firstError,
  //   });
  // } else {
  if (resetPasswordLink) {
    jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function (
      err,
      decoded
    ) {
      if (err) {
        return res.status(400).json({
          error: "Expired link. Try again",
        });
      }

      User.findOne(
        {
          resetPasswordLink,
        },
        (err, user) => {
          if (err || !user) {
            return res.status(400).json({
              error: "Something went wrong. Try later",
            });
          }

          const updatedFields = {
            password: newPassword,
            resetPasswordLink: "",
          };

          user = _.extend(user, updatedFields);

          user.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: "Error resetting user password",
              });
            }
            res.json({
              message: `Great! Now you can login with your new password`,
            });
          });
        }
      );
    });
  }
};

exports.logout = (req, res) => {
  console.log(req.user);
  res.send(req.user);
};
