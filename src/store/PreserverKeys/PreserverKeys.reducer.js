export default function (state = [], action) {
    switch (action.type) {
        case "SAVE":
            return action.payload;
        default:
            return state;
    }
}
