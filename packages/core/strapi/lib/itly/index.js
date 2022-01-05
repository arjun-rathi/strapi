/**
 * This file is auto-generated by Amplitude.
 * To update run 'ampli pull packages-core-strapi'
 *
 * Works with versions ^2.0.8 of @itly/sdk and @itly/plugin's
 * https://www.npmjs.com/search?q=%40itly
 */

/* eslint-disable */

'use strict';

var { ItlyNode, Plugin, Validation, Loggers } = require('@itly/sdk');
var { SchemaValidatorPlugin } = require('@itly/plugin-schema-validator');

/**
 * @typedef {Object} AliasOptions
 */

/**
 * @typedef {Object} IdentifyOptions
 */

/**
 * @typedef {Object} GroupOptions
 */

/**
 * @typedef {Object} PageOptions
 */

/**
 * @typedef {Object} TrackOptions
 */

class DidCheckLicense {
  constructor(properties) {
    this.name = 'didCheckLicense';
    this.id = '234e8279-54ef-44a7-84e0-3005c05b4b82';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidConfigureListView {
  constructor(properties) {
    this.name = 'didConfigureListView';
    this.id = 'f741c542-523d-4cee-a516-d93cfa593adc';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateComponent {
  constructor(properties) {
    this.name = 'didCreateComponent';
    this.id = 'df6e9897-06bf-40de-a57f-97b5e070efa0';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateContentType {
  constructor(properties) {
    this.name = 'didCreateContentType';
    this.id = '05ad5e17-1418-49ff-a2e6-8eeafa936bda';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateFirstAdmin {
  constructor(properties) {
    this.name = 'didCreateFirstAdmin';
    this.id = '2c214c9a-fe39-4395-832a-4ac8c57eb45f';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateFirstComponent {
  constructor(properties) {
    this.name = 'didCreateFirstComponent';
    this.id = 'b1675a37-3b86-4f26-b92c-51af1ab7dae2';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateFirstContentType {
  constructor(properties) {
    this.name = 'didCreateFirstContentType';
    this.id = 'bf628edd-41d7-475c-ad79-d369b465676f';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidCreateFirstContentTypeEntry {
  constructor(properties) {
    this.name = 'didCreateFirstContentTypeEntry';
    this.id = '1c19a5ab-2705-48c5-99f2-165e5b8ccc3d';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidDisableResponsiveDimensions {
  constructor(properties) {
    this.name = 'didDisableResponsiveDimensions';
    this.id = 'd03a8522-5055-4f94-9b32-5a154611bebf';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidEnableResponsiveDimensions {
  constructor(properties) {
    this.name = 'didEnableResponsiveDimensions';
    this.id = '6b08184e-ab9d-412b-84ed-4dcd6f68651d';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidInitializeI18N {
  constructor(properties) {
    this.name = 'didInitializeI18n';
    this.id = 'bd0b10ba-3178-41b9-abb0-b9c7a98a7121';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidInstallStrapi {
  constructor(properties) {
    this.name = 'didInstallStrapi';
    this.id = '7af08ece-9d5f-4f91-bd03-f452f7e79866';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidInviteUser {
  constructor(properties) {
    this.name = 'didInviteUser';
    this.id = '9ee2c533-8d1b-4633-8789-c9345606ed4e';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidNotCreateContentType {
  constructor(properties) {
    this.name = 'didNotCreateContentType';
    this.id = '8bab4968-431d-4b72-8835-27881ea61f76';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidReceiveRequest {
  constructor(properties) {
    this.name = 'didReceiveRequest';
    this.id = 'cf48a889-f261-4e4e-a036-4d3e7b86bc2b';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidSaveMediaWithAlternativeText {
  constructor(properties) {
    this.name = 'didSaveMediaWithAlternativeText';
    this.id = 'a7b3bbf1-082a-4031-a1b1-7b0cea2e39d3';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidSaveMediaWithCaption {
  constructor(properties) {
    this.name = 'didSaveMediaWithCaption';
    this.id = '83d77975-6673-4aba-944d-674019f180fe';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidStartServer {
  constructor(properties) {
    this.name = 'didStartServer';
    this.id = 'c8665570-e204-432e-9220-16473d067d11';
    this.version = '3.0.0';
    this.properties = properties;
  }
}

class DidUpdateI18NLocales {
  constructor(properties) {
    this.name = 'didUpdateI18nLocales';
    this.id = '7571469e-be6c-45b2-a8ef-b45bd7298d32';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

class DidUpdateRolePermissions {
  constructor(properties) {
    this.name = 'didUpdateRolePermissions';
    this.id = '7689c4b1-6fe0-4d0f-b0c5-c66a1819f986';
    this.version = '1.0.0';
    this.properties = properties;
  }
}

// prettier-ignore
class Itly {
  constructor() {
    this.itly = new ItlyNode();
  }

  /**
   * Initialize the Itly SDK. Call once when your application starts.
   * @param {Object} [loadOptions] Configuration options to initialize the Itly SDK with.
   */
  load(loadOptions) {
    loadOptions = loadOptions || {};
    const {
      destinations = {},
      plugins = [],
      ...options
    } = loadOptions;

    if (plugins.length < 1) {
      throw new Error('Your tracking plan is configured with a custom destination but a `plugins` array was not provided on `loadOptions`.');
    }

    const destinationPlugins = destinations.all && destinations.all.disabled
      ? []
      : [

      ];

    this.itly.load({
      ...options,
      plugins: [
        new SchemaValidatorPlugin({
          'didCheckLicense': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didConfigureListView': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateComponent': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateContentType': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateFirstAdmin': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateFirstComponent': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateFirstContentType': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didCreateFirstContentTypeEntry': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didDisableResponsiveDimensions': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didEnableResponsiveDimensions': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didInitializeI18n': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didInstallStrapi': {"type":"object","properties":{"deviceId":{"type":"string"}},"additionalProperties":false,"required":["deviceId"]},
          'didInviteUser': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didNotCreateContentType': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didReceiveRequest': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didSaveMediaWithAlternativeText': {"type":"object","properties":{"diveceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["diveceId","uuid"]},
          'didSaveMediaWithCaption': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didStartServer': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didUpdateI18nLocales': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
          'didUpdateRolePermissions': {"type":"object","properties":{"deviceId":{"type":"string"},"uuid":{"type":"string"}},"additionalProperties":false,"required":["deviceId","uuid"]},
        }),
        ...destinationPlugins,
        ...plugins,
      ]
    });
  }

  /**
   * Alias a user ID to another user ID.
   * @param {string} userId The user's new ID.
   * @param {string} previousId The user's previous ID.
   * @param {AliasOptions} [options] Options for this alias call.
   */
  alias(userId, previousId, options) {
    this.itly.alias(userId, previousId, options);
  }

  /**
   * Identify a user.
   * @param {string} userId The user's ID.
   * @param {IdentifyOptions} [options] Options for this identify call.
   */
  identify(userId, options) {
    this.itly.identify(userId, undefined, options);
  }

  /**
   * Associate a user with a group.
   * @param {string} userId The user's ID.
   * @param {string} groupId The group's ID.
   * @param {GroupOptions} [options] Options for this group call.
   */
  group(userId, groupId, options) {
    this.itly.group(userId, groupId, undefined, options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCheckLicense(userId, properties, options) {
    this.itly.track(userId, new DidCheckLicense(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didConfigureListView(userId, properties, options) {
    this.itly.track(userId, new DidConfigureListView(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateComponent(userId, properties, options) {
    this.itly.track(userId, new DidCreateComponent(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateContentType(userId, properties, options) {
    this.itly.track(userId, new DidCreateContentType(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateFirstAdmin(userId, properties, options) {
    this.itly.track(userId, new DidCreateFirstAdmin(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateFirstComponent(userId, properties, options) {
    this.itly.track(userId, new DidCreateFirstComponent(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateFirstContentType(userId, properties, options) {
    this.itly.track(userId, new DidCreateFirstContentType(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didCreateFirstContentTypeEntry(userId, properties, options) {
    this.itly.track(userId, new DidCreateFirstContentTypeEntry(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didDisableResponsiveDimensions(userId, properties, options) {
    this.itly.track(userId, new DidDisableResponsiveDimensions(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didEnableResponsiveDimensions(userId, properties, options) {
    this.itly.track(userId, new DidEnableResponsiveDimensions(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didInitializeI18N(userId, properties, options) {
    this.itly.track(userId, new DidInitializeI18N(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didInstallStrapi(userId, properties, options) {
    this.itly.track(userId, new DidInstallStrapi(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didInviteUser(userId, properties, options) {
    this.itly.track(userId, new DidInviteUser(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didNotCreateContentType(userId, properties, options) {
    this.itly.track(userId, new DidNotCreateContentType(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didReceiveRequest(userId, properties, options) {
    this.itly.track(userId, new DidReceiveRequest(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.diveceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didSaveMediaWithAlternativeText(userId, properties, options) {
    this.itly.track(userId, new DidSaveMediaWithAlternativeText(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didSaveMediaWithCaption(userId, properties, options) {
    this.itly.track(userId, new DidSaveMediaWithCaption(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didStartServer(userId, properties, options) {
    this.itly.track(userId, new DidStartServer(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didUpdateI18NLocales(userId, properties, options) {
    this.itly.track(userId, new DidUpdateI18NLocales(properties), options);
  }

  /**
   * Owner: Ivan Sevcenko
   * @param {string} userId The user's ID.
   * @param {Object} properties The event's properties.
   * @param {string} properties.deviceId Property has no description in tracking plan.
   * @param {string} properties.uuid Property has no description in tracking plan.
   * @param {TrackOptions} [options] Options for this track call.
   */
  didUpdateRolePermissions(userId, properties, options) {
    this.itly.track(userId, new DidUpdateRolePermissions(properties), options);
  }

  /**
   * Track any event.
   * @param {string} userId The user's ID.
   * @param {Object} event The event.
   * @param {string} event.name The event's name.
   * @param {string} [event.properties] The event's properties.
   * @param {string} [event.id] The event's ID.
   * @param {string} [event.version] The event's version.
   * @param {TrackOptions} [options] Options for this track call.
   */
  track(userId, event, options) {
    this.itly.track(userId, event, options);
  }

  // reset() N/A for Node.js

  async flush() {
    await this.itly.flush();
  }
}

module.exports.itly = new Itly();
module.exports.Plugin = Plugin;
module.exports.Validation = Validation;
module.exports.Loggers = Loggers;
module.exports.DidCheckLicense = DidCheckLicense;
module.exports.DidConfigureListView = DidConfigureListView;
module.exports.DidCreateComponent = DidCreateComponent;
module.exports.DidCreateContentType = DidCreateContentType;
module.exports.DidCreateFirstAdmin = DidCreateFirstAdmin;
module.exports.DidCreateFirstComponent = DidCreateFirstComponent;
module.exports.DidCreateFirstContentType = DidCreateFirstContentType;
module.exports.DidCreateFirstContentTypeEntry = DidCreateFirstContentTypeEntry;
module.exports.DidDisableResponsiveDimensions = DidDisableResponsiveDimensions;
module.exports.DidEnableResponsiveDimensions = DidEnableResponsiveDimensions;
module.exports.DidInitializeI18N = DidInitializeI18N;
module.exports.DidInstallStrapi = DidInstallStrapi;
module.exports.DidInviteUser = DidInviteUser;
module.exports.DidNotCreateContentType = DidNotCreateContentType;
module.exports.DidReceiveRequest = DidReceiveRequest;
module.exports.DidSaveMediaWithAlternativeText = DidSaveMediaWithAlternativeText;
module.exports.DidSaveMediaWithCaption = DidSaveMediaWithCaption;
module.exports.DidStartServer = DidStartServer;
module.exports.DidUpdateI18NLocales = DidUpdateI18NLocales;
module.exports.DidUpdateRolePermissions = DidUpdateRolePermissions;