/**
 * API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateSubmissionDataRequestTokenResponseToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSubmissionDataRequestTokenResponseToken'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.CreateSubmissionDataRequestTokenResponse = factory(root.FormAPI.ApiClient, root.FormAPI.CreateSubmissionDataRequestTokenResponseToken);
  }
}(this, function(ApiClient, CreateSubmissionDataRequestTokenResponseToken) {
  'use strict';




  /**
   * The CreateSubmissionDataRequestTokenResponse model module.
   * @module model/CreateSubmissionDataRequestTokenResponse
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>CreateSubmissionDataRequestTokenResponse</code>.
   * @alias module:model/CreateSubmissionDataRequestTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreateSubmissionDataRequestTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubmissionDataRequestTokenResponse} obj Optional instance to populate.
   * @return {module:model/CreateSubmissionDataRequestTokenResponse} The populated <code>CreateSubmissionDataRequestTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = CreateSubmissionDataRequestTokenResponseToken.constructFromObject(data['token']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:model/CreateSubmissionDataRequestTokenResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/CreateSubmissionDataRequestTokenResponseToken} token
   */
  exports.prototype['token'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


