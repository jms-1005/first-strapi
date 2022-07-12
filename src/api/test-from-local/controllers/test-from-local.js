'use strict';

/**
 *  test-from-local controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-from-local.test-from-local');
