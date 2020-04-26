import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
});

const heartStoneCardSchema = {
    type: "object",
    additionalProperties: false,
    required: ["name", "description", "mana", "damage", "health", "url"],
    properties: {
        name: {
            type: "string",
            maxLength: 40,
        },
        description: {
            type: "string",
            maxLength: 120,

        },
        mana: {
            type: "integer",
        },
        damage: {
            type: "integer",
        },
        health: {
            type: "integer",
        },
        url: {
            type: "string",
            format: "url"
        }
    }
}
console.log("Is schema valid:")
console.log(ajv.validateSchema(heartStoneCardSchema));
console.log(JSON.stringify(heartStoneCardSchema));

const objectCard = {
    name: "Grommash Hellscream",
    description: "Grommash Hellscream is a legendary warrior minion card, from the Classic set.",
    mana: 8,
    damage: 4,
    health: 9,
    url: "https://hearthstone.gamepedia.com/Grommash_Hellscream"
};
const validate = ajv.compile(heartStoneCardSchema);
console.log("Is object valid:")
console.log(validate(objectCard));
console.log(JSON.stringify(objectCard));

