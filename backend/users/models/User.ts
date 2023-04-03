import mongoose from 'mongoose';

interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  stressLevelsSubmissions: {
    date: Date;
    stressLevel: number;
    attachment: string;
  }[];
}

const stressLevelSubmissionSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  stressLevel: {
    type: Number,
  },
  attachment: {
    type: String,
  },
  description: {
    type: String,
  },
}, { _id: false, timestamps: true});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String
  },
  stressLevelsSubmissions: {
    type: [stressLevelSubmissionSchema],
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

export { User, UserDocument };