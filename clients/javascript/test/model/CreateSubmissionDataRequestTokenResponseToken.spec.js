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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FormAPI);
  }
}(this, function(expect, FormAPI) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateSubmissionDataRequestTokenResponseToken', function() {
    it('should create an instance of CreateSubmissionDataRequestTokenResponseToken', function() {
      // uncomment below and update the code to test CreateSubmissionDataRequestTokenResponseToken
      //var instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
      //expect(instance).to.be.a(FormAPI.CreateSubmissionDataRequestTokenResponseToken);
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
      //expect(instance).to.be();
    });

    it('should have the property dataRequestUrl (base name: "data_request_url")', function() {
      // uncomment below and update the code to test the property dataRequestUrl
      //var instance = new FormAPI.CreateSubmissionDataRequestTokenResponseToken();
      //expect(instance).to.be();
    });

  });

}));