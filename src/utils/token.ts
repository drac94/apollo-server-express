import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import config from '../config';

type Token = {
  userId: string;
  iat: number;
  exp: number;
};

const create = (userId: mongoose.Types.ObjectId) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {
        userId,
      },
      config.JwtSecret,
      {
        expiresIn: config.JwtLifeTime,
      },
      (error, token) => {
        if (error) {
          reject(error);
        }

        resolve(token);
      }
    );
  });

const getDecodedToken = (token: string): Promise<Token> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.JwtSecret, (error, decoded) => {
      const decodedToken = decoded as Token;
      if (error) {
        reject(error);
      }

      if (!decodedToken.exp || !decodedToken.iat) {
        reject(new Error("Token had no 'exp' or 'iat' payload"));
      }

      resolve(decodedToken);
    });
  });

export default {
  create,
  getDecodedToken,
};
