import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
});

const nascarHeroCardSchema = {
    type: "object",
    additionalProperties: false,
    required: ["ipfsHashImageFront", "issuedDate", "issuedLocation", "signed"],
    properties: {
        ipfsHashImageFront: {
            type: "string",
            maxLength: 120,
            minLength: 1,
        },
        ipfsHashImageBack: {
            type: "string",
            maxLength: 120,
            minLength: 1,
        },
        issuedDate: {
            format: "date",
        },
        issuedLocation: {
            type: "string",
            maxLength: 255,
            minLength: 1,
        },
        signed: {
            type: "boolean"
        },
        tags: {
            type: "array",
            maxItems: 12,
            minItems: 1,
            additionalItems: false,
            uniqueItems: true,
            items: {
                type: "string",
            }
        }
    }
}
console.log("Is schema valid:")
console.log(ajv.validateSchema(nascarHeroCardSchema));
console.log(JSON.stringify(nascarHeroCardSchema, null, 4));

// const objectCard = {
//     ipfsHashImage: "QmavUFtLyRbUEEFLrmDTyRY5sLMh8UnQxWEenx2tuvzSE6",
//     issuedDate: "2020-09-25",
//     issuedLocation: "Mooresville , North Carolina",
//     signed: true,
// };
const objectCard = {
    ipfsHashImageFront: "QmavUFtLyRbUEEFLrmDTyRY5sLMh8UnQxWEenx2tuvzSE6",
    ipfsHashImageBack: "QmdGCntrw9yabGJAU1nG3H38yQ2GLsphg3jwaxSGbXEj61",
    issuedDate: "2020-09-25",
    issuedLocation: "Mooresville , North Carolina",
    signed: true,
};
const validate = ajv.compile(nascarHeroCardSchema);
console.log("Is object valid:")
console.log(validate(objectCard));
console.log(ajv.errorsText(validate.errors))
console.log(JSON.stringify(objectCard, null, 4));


