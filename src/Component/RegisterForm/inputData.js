const inputList = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errormessage: "Invalid Name",
        required: true
    },
    {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "UserName",
        errormessage: "Invalid Username",
        required: true
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errormessage: "Invalid Email",
        required: true
    },
    {
        id: 4,
        name: "mobile",
        type: "number",
        placeholder: "Mobile",
        errormessage: "Invalid Mobile No.",
        pattern: "^[0-9]{10}$",
        required: true
    }
];

export default inputList;