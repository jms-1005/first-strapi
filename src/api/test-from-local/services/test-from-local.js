'use strict';

/**
 * test-from-local service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-from-local.test-from-local');
