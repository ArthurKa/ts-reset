import { ZodType, ZodTypeDef } from 'zod';

declare module 'zod/lib/external' {
  // WARN: `@ts-ignore` directive will be added here on compile
  // @ts-expect-error
  const custom: <T>(check: (e: unknown) => e is T) => ZodType<T, ZodTypeDef, T>;
}
