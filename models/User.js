const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
  },
  firstName: {
    type: String,
    required: [true, 'You must provide a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'You must provide a last name'],
  },
  language: {
    type: String,
    default: "en",
  },
  image: {
    type: String,
    default: "",
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
  },
  socketId: {
    type: String,
    default: "",
  },
  messages: [{
    // type: Schema.Types.ObjectId,
    // ref: "Message",
    from:String,
    to:String,
    message:String,
    translatedMessage:String
  }],
  loggedIn:{
    status:Boolean,
    token:String,
  },
  friends:[{
    type:String
  }]

});

UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};


UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return Promise.resolve(isMatch);
  } catch (e) {
    return Promise.reject(e);
  }
};

UserSchema.pre('save', async function (next) {
  // gets access to the user model that is currently being saved
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      // overwrite the plain text password with our hash
      user.password = hash;
      // Finally call save
      next();
    } catch (e) {
      // Call save with an error
      next(e);
    }
  }
  next();
});

module.exports = model('User', UserSchema);