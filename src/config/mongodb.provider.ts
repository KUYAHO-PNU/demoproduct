import { MongoClient } from 'mongodb';
import { MONGODB_PROVIDER } from './constants';
export const uri =
  'mongodb+srv://proudct:00000000@cluster0.4ytl9.mongodb.net/cluster0?retryWrites=true&w=majority';

export const mongoDbProviders = [
  {
    provide: MONGODB_PROVIDER,
    useFactory: async () =>
      new Promise((resolve, reject) => {
        MongoClient.connect(
          uri,
          { useUnifiedTopology: true },
          (error, client) => {
            if (error) {
              reject(error);
            } else {
              resolve(client.db('nestjs-sample'));
            }
          },
        );
      }),
  },
];
