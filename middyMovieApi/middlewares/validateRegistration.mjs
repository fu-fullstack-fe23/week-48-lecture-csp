import userSchema from "../models/userSchema.mjs";

export const validateRegistration = () => ({
    before : (handler) => {
        const { error } = userSchema.validate(JSON.parse(handler.event.body));

        if(error) {
            throw new Error(error.details[0].message);
        }
        return;
    }
});