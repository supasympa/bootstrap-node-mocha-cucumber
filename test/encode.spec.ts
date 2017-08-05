import * as chai from "chai";

import { decode, encode } from "../src/utility/encode";

const expect = chai.expect;

describe("encode", () => {
    it("should encode a string", () => {
        expect(encode("JOHN0001")).to.equal("Sk9ITjAwMDE=");
    });

    it("should encode a different string", () => {
        expect(encode("JANE0001")).to.equal("SkFORTAwMDE=");
    });
});

describe("decode", () => {
    it("should decode a string", () => {
        expect(decode("Sk9ITjAwMDE=")).to.equal("JOHN0001");
    });

    it("should decode a different string", () => {
        expect(decode   ("SkFORTAwMDE=")).to.equal("JANE0001");
    });

});
