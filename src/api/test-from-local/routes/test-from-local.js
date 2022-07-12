'use strict';

/**
 * test-from-local router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-from-local.test-from-local');
