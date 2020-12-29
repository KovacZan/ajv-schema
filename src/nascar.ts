import Ajv from "ajv";

const ajv = new Ajv({
    allErrors: true,
});

const nascarSchema = {
    type: "object",
    additionalProperties: false,
    required: ["name", "description", "teamName", "dateOfBirth", "carType"],
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
        teamName: {
            type: "string",
            maxLength: 120,
            minLength: 1,
        },
        dateOfBirth: {
            format: "date",
        },
        carType: {
            type: "string",
            maxLength: 10,
            minLength: 1,
        },
    }
}
console.log("Is schema valid:")
console.log(ajv.validateSchema(nascarSchema));
console.log(JSON.stringify(nascarSchema, null, 4));

const objectCard = {
    name: "COREY LAJOIE",
    description: "Corey LaJoie returns for another full-time season in the NASCAR " +
        "Cup Series with Go Fas Racing. He earned two top-10 finishes in 2019 with the team. " +
        "LaJoie is a third generation racer and a very well-known name in the racing world. " +
        "His grandfather, Don LaJoie, is a member of the New England Auto Racing Hall of Fame" +
        " alongside his father, Randy LaJoie, who won the Xfinity Series Championships in 1996 and 1997.",
    teamName: "GO FAS RACING",
    dateOfBirth: "1991-09-25",
    carType: "Ford"
};
const validate = ajv.compile(nascarSchema);
console.log("Is object valid:")
console.log(validate(objectCard));
console.log(JSON.stringify(objectCard, null, 4));


