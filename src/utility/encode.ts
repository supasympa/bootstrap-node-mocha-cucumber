
const encode = (str: string): string => (new Buffer(str.toString(), "binary")).toString("base64");
const decode = (str: string): string => Buffer.from(str, "base64").toString();

export { encode, decode };