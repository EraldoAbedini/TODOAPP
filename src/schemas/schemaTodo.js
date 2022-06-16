const getUSERSopts = {
    schema: {
        response: {
            200: {
                type: 'array',
                users: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        first_name: { type: 'string' },
                        last_name: { type: 'string' },
                        email: { type: 'string' }
                    }
                }
            }
        }
    }
};

const getUsersID = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
};
module.exports = { getUSERSopts, getUsersID };