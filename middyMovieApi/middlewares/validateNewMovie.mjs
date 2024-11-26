import movieSchema from "../models/movieSchema.mjs";

export const validateNewMovie = () => ({
    before : (handler) => {
        const { error } = movieSchema.validate(JSON.parse(handler.event.body));

        if(error) {
            throw new Error(error.details[0].message);
        }
        return;
    }
});