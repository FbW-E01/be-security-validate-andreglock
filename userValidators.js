import { body } from 'express-validator';

export const userValidators = [
    body("species")
        .isLength({ min: 3 }).withMessage("Species must be at least 3 characters long")
        .isLength({ max: 80 }).withMessage("Species can't be more than 80 characters long")
        .isAlpha('en-US', {ignore: ' '}).withMessage("Species must contain only letters"),
    body("notes").isLength({ min: 140 }).withMessage("Notes must be at least 140 characters long"),
    body("estimatedAmount").isNumeric().withMessage("Estimated amount must be numeric"),
]