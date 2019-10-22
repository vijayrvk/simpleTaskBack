const Joi = require('joi');

const createProjectSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    startDate: Joi.object(),
    endDate: Joi.object(),
    billable: Joi.boolean(),
    estimatedDays: Joi.number(),
    isActive: Joi.boolean(),
    createdBy: Joi.string(),
    createdAt: Joi.date().timestamp(),
    updatedBy: Joi.string(),
    updateAt: Joi.date().timestamp(),
    baseURL: Joi.string(),
    users: Joi.array().allow(null, [])
});
const updateProjectSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    startDate: Joi.object().allow(null, ''),
    endDate: Joi.object().allow(null, ''),
    billable: Joi.boolean(),
    estimatedDays: Joi.number(),
    isActive: Joi.boolean(),
    createdAt: Joi.date().timestamp(),
    updatedBy: Joi.string(),
    updateAt: Joi.date().timestamp(),
    id: Joi.string(),
    baseURL: Joi.string(),
    users: Joi.array().allow(null, [])
});
const getProjectSchema = Joi.object({
    id: Joi.string().required()
});

module.exports = {
    createProjectSchema: createProjectSchema,
    updateProjectSchema: updateProjectSchema,
    getProjectSchema: getProjectSchema
};