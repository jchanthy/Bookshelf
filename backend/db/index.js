import mongoose from 'mongoose';

const connectToDb = async () =>
  await mongoose.connect(
  `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.xw9upt9.mongodb.net/booksheltDb`,
  // `mongodb+srv://elsa:Zt3TktagFCN018vQ@cluster0.xw9upt9.mongodb.net/bookshelfDb`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );

export default connectToDb;