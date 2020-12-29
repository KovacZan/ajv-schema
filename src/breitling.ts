import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
});

const breitlingSchema = {
    type: "object",
    additionalProperties: false,
    required: ["name", "description", "modelName", "identificationNumber", "dateOfPurchase"],
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
        identificationNumber: {
            type: "number",
        },
        caseNumber: {
            type: "number",
        },
        dateOfPurchase: {
            format: "date",
        },
        technicalData: {
            type: "object",
            additionalProperties: true,
            properties: {
                movement: {
                    type: "object"
                },
                case: {
                    type: "object"
                },
                dimensions: {
                    type: "object"
                },
                strap: {
                    type: "object"
                }
            }
        },
    }
}
console.log("Is schema valid:")
console.log(ajv.validateSchema(breitlingSchema));
console.log(JSON.stringify(breitlingSchema, null, 4));

// const objectCard = {
//     name: "ENDURANCE PRO",
//     description: "Designed to be both a lightweight watch for athletes and" +
//         " a casual, everyday sports chronograph, the Endurance Pro perfectly " +
//         "blends high precision & innovative technology with a vibrant & colorful " +
//         "design. It is the ultimate athleisure watch.",
//     modelName: "X82310D51B1S1",
//     identificationNumber: 8023128430942321321,
//     caseNumber: 10,
//     dateOfPurchase: "2018-02-29",
//     technicalData: {
//         movement: {
//             caliber: "Breitling 82",
//             movement: "Thermocompensated SuperQuartz\\™",
//             chronograph: "1/10th second, 30 minutes",
//             calendar: "Dial aperture"
//         },
//         case: {
//             caseback: "With screws",
//             batteryType: "395/ 3-4 years",
//             waterResistance: "100 m (330 ft)",
//             bezel: "Bidirectional, compass scale",
//             crown: "Non screw-locked, two gaskets",
//             crystal: "Sapphire, glareproofed both sides",
//         },
//         dimensions: {
//             diameter: "44.00 mm"
//         },
//         strap: {
//             lug: "22/20 mm"
//         }
//     }
// };

// const objectCard = {
//     name: "CHRONOMAT AUTOMATIC 36",
//     description: "Stylish yet elegant, the modern-retro inspired Chronomat Automatic 36 is the versatile sporty and chic watch for any occasion.",
//     modelName: "A10380101A2A1",
//     identificationNumber: 12312312312231,
//     caseNumber: 15,
//     dateOfPurchase: "2019-03-26",
//     technicalData: {
//         movement: {
//             caliber: "Breitling 10",
//             movement: "self-winding mechanical",
//             powerReserve: "approx. 42 hours",
//             vibration: "28,800 v.p.h",
//             jewel: "25 jewels",
//             calendar: "Dial aperture"
//         },
//         case: {
//             caseback: "Screwed in",
//             waterResistance: "100 m (330 ft)",
//             bezel: "Unidirectional, ratcheted",
//             crown: "Non screw-locked, two gaskets",
//             crystal: "Cambered sapphire, glareproofed both sides",
//         },
//         strap: {
//             lug: "18/16 mm"
//         }
//     }
// };

const objectCard = {
    name: "AVI REF. 765 1953 RE-EDITION",
    description: "AVI REF. 765 1953 RE-EDITION celebrates the Co-Pilot Ref. 765 AVI introduced in 1953.",
    modelName: "AB0920131B1X1",
    identificationNumber: 66345435345,
    caseNumber: 105,
    dateOfPurchase: "2020-01-13",
    technicalData: {
        movement: {
            caliber: "Breitling B09 (Manufacture)",
            movement: "Mechanical hand-wound",
            powerReserve: "approx. 70 hrs",
            chronograph: "1/5th second, 15 minutes, 12 hours",
            vibration: "28,800 v.p.h",
            jewel: "39 jewels",
        },
        case: {
            caseback: "Screwed in",
            waterResistance: "3 bars",
            bezel: "Bidirectional",
            crown: "Non screw-locked, one gasket",
        },
        strap: {
            lug: "22/18 mm"
        }
    }
};
const validate = ajv.compile(breitlingSchema);
console.log("Is object valid:")
console.log(validate(objectCard));
console.log(ajv.errorsText(validate.errors))

console.log(JSON.stringify(objectCard, null, 4));


