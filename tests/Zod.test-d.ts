import { expectType } from 'tsd';
import { z } from 'zod';

declare const isNumber: (e: unknown) => e is number;
const numberSchema = z.custom(isNumber);

type NumberSchema = z.infer<typeof numberSchema>;
//   ^?
declare const number: NumberSchema;
expectType<number>(number);

declare const isString: (e: unknown) => e is string;
const stringSchema = z.custom(isString);

type StringSchema = z.infer<typeof stringSchema>;
//   ^?
declare const string: StringSchema;
expectType<string>(string);
