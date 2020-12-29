import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
});

const iwcSchema = {
    type: "object",
    additionalProperties: false,
    required: ["name", "description", "modelName", "chf", "dateOfPurchase"],
    properties: {
        name: {
            type: "string",
            maxLength: 120,
            minLength: 1,
        },
        description: {
            type: "string",
            maxLength: 1000,
            minLength: 1,
        },
        modelName: {
            type: "string",
            maxLength: 50,
            minLength: 1,
        },
        chf: {
            type: "string",
            maxLength: 50,
            minLength: 1,
        },
        dateOfPurchase: {
            format: "date",
        },
        technicalData: {
            type: "object",
            additionalProperties: true,
        }
    }
}
console.log("Is schema valid:")
console.log(ajv.validateSchema(iwcSchema));
console.log(JSON.stringify(iwcSchema, null, 4));

const objectCard = {
    name: "PORTOFINO HAND-WOUND TOURBILLON RÉTROGRADE",
    description: "18 ct 5N gold case, Manual-winding, Diameter 45.0 mm. Made in Schaffhausen, Switzerland.",
    modelName: "IW516501",
    chf: "62'000",
    dateOfPurchase: "2018-02-29",
    technicalData: {
        movement: {
            caliber: "59900 Calibre",
            movement: "IWC-manufactured movement",
            otherInformation: "Manual-winding\n" +
                "192 hours Power Reserve\n" +
                "Frequency 28800.0 vph (4.0 hz)\n" +
                "315 Components\n" +
                "38 Jewels\n" +
                "Côtes de Genève, perlage"
        },
        case: "\n" +
            "18 ct 5N gold case\n" +
            "Diameter 45.0 mm\n" +
            "Height 14.0 mm\n" +
            "See-through sapphire glass back\n" +
            "Water resistance 3 bar",
        dial: "Silver-plated dial",
        strap: "Dark brown alligator leather strap by Santoni\n" +
            "Strap width 22 mm",
        features: [
            "Flying minute tourbillon",
            "Hacking tourbillon mechanism",
            "8 days power reserve",
            "Retrograde date display",
            "Power reserve display",
            "Sapphire glass, arched-edge, antireflective coating on both sides"
        ]
    }
};
const validate = ajv.compile(iwcSchema);
console.log("Is object valid:")
console.log(validate(objectCard));
console.log(JSON.stringify(objectCard, null, 4));


