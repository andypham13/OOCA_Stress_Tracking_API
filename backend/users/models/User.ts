import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  stressLevelsSubmissions: {
    type: [{
      date: Date,
      stressLevel: Number,
      attachment: String,
    }],
  },
}, { timestamps: true });

userSchema.index({ email: 1 });
userSchema.index({ name: 1 });


userSchema.pre('save', function (next) {
  if (!this.name) {
    console.log('Anonymous user, generating name...');
    this.name = 'user-' + Math.floor(Math.random() * 1000000);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export { User };