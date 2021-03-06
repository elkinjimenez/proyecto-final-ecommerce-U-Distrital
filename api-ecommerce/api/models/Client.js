/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user: { type: 'string' },
    password: { type: 'string' },
    state: { type: 'boolean' },
    gender: { type: 'string' },
    person: { model: 'Person' },

  },

};

