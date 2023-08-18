import 'jsonwebtoken';

declare module 'jsonwebtoken' {
  function sign<T extends Record<string, unknown>>(
    payload: T,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ): string;

  function verify<T>(token: string, secretOrPublicKey: Secret, options?: VerifyOptions & { complete?: false }): (
    T & { iat: number }
  );
}
