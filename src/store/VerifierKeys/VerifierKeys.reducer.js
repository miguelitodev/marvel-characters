export default function (state = [], action) {
    switch (action.type) {
        case "VERIFY":
            return action.payload;
        default:
            return state;
    }
}
