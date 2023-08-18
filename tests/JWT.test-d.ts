import { expectType } from 'tsd';
import jwt from 'jsonwebtoken';

type JWTPayload = {
  userId: string;
};

const res1 = jwt.verify<JWTPayload>('authToken', 'JWT_SIGN_KEY');
expectType<JWTPayload & { iat: number }>(res1);

const res2 = jwt.sign<JWTPayload>({ userId: 'asd' }, 'JWT_SIGN_KEY');
expectType<string>(res2);
