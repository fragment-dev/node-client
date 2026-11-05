export type ValidationError = {
  keywordLocation: string;
  instanceLocation: string;
};

/** A compiled JSON Schema validator. `errors` holds the first failure after a `false` result. */
export type Validator = {
  (value: unknown): boolean;
  errors?: ValidationError[] | null;
};
