export function save(publicKey, privateKey, validate) {
    return {
        type: "SAVE",
        payload: {
            publicKey: publicKey,
            privateKey: privateKey,
            validate: validate,
        },
    };
}
