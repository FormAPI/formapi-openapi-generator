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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['api/PDFApi', 'ApiClient', 'model/AuthenticationError', 'model/AuthenticationSuccessResponse', 'model/CombinedSubmission', 'model/CombinedSubmissionData', 'model/CreateCombinedSubmissionResponse', 'model/CreateSubmissionData', 'model/CreateSubmissionResponse', 'model/Error', 'model/InvalidRequest', 'model/Submission', 'model/Template'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./PDFApi'), require('../ApiClient'), require('../model/AuthenticationError'), require('../model/AuthenticationSuccessResponse'), require('../model/CombinedSubmission'), require('../model/CombinedSubmissionData'), require('../model/CreateCombinedSubmissionResponse'), require('../model/CreateSubmissionData'), require('../model/CreateSubmissionResponse'), require('../model/Error'), require('../model/InvalidRequest'), require('../model/Submission'), require('../model/Template'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.PDFApi = factory(root.FormAPI.PDFApi, root.FormAPI.ApiClient, root.FormAPI.AuthenticationError, root.FormAPI.AuthenticationSuccessResponse, root.FormAPI.CombinedSubmission, root.FormAPI.CombinedSubmissionData, root.FormAPI.CreateCombinedSubmissionResponse, root.FormAPI.CreateSubmissionData, root.FormAPI.CreateSubmissionResponse, root.FormAPI.Error, root.FormAPI.InvalidRequest, root.FormAPI.Submission, root.FormAPI.Template);
  }
}(this, function (PDFApi, ApiClient, AuthenticationError, AuthenticationSuccessResponse, CombinedSubmission, CombinedSubmissionData, CreateCombinedSubmissionResponse, CreateSubmissionData, CreateSubmissionResponse, Error, InvalidRequest, Submission, Template) {
  'use strict';
  /**
   * PDF service.
   * @module api/Client
   * @version 1.0.0
   */

  // Object.create polyfill for very old browsers
  if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
      if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
      } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
      }

      if (typeof propertiesObject != 'undefined') {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
      }

      function F() { }
      F.prototype = proto;

      return new F();
    };
  }

  // Object.assign polyfill
  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  /**
   * Constructs a new Client.
   * @alias module:api/Client
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  function Client(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    PDFApi.call(this, this.apiClient);
    var self = this;

    var waitForPDFJob = function (_options, startJob, updateRecord, callback) {
      var options = Object.assign({}, _options);
      var timeout = options.timeout != null ? options.timeout : 60;
      delete options.timeout;
      var wait = options.wait == null ? true : !!options.wait;
      delete options.wait;

      startJob(function (record) {
        if (!wait || record.state != 'pending') {
          callback(null, record,
            record.state == 'pending' || record.state == 'processed');
          return;
        }
        var startTime = Math.floor(new Date() / 1000);

        var waitForPDF = function () {
          updateRecord(record, function (updatedRecord) {
            record = updatedRecord;
            if (record.state != 'pending') {
              callback(null, record, record.state == 'processed');
              return;
            }
            var currentTime = Math.floor(new Date() / 1000);
            if (currentTime - startTime > timeout) {
              callback(new Error("PDF job was not finished after " +
                timeout + " seconds!"), record, false);
            }
            setTimeout(waitForPDF, 1000);
          });
        }
        setTimeout(waitForPDF, 1000);
      })
    }

    this.originalCombineSubmissions = this.combineSubmissions.bind(this);
    this.combineSubmissions = function (options, callback) {
      waitForPDFJob(options, function (waitCallback) {
        self.originalCombineSubmissions(options, function (error, response) {
          if (error) {
            callback(error, response);
            return;
          }
          waitCallback(response.combined_submission);
        });
      }, function (record, updateCallback) {
        self.getCombinedSubmission(record.id, function (error, combinedSubmission) {
          if (error) {
            callback(error, response);
            return;
          }
          updateCallback(combinedSubmission);
        });
      }, function (error, record, success) {
        if (error) {
          callback(error, record);
          return;
        }
        var response = CreateCombinedSubmissionResponse.constructFromObject({
          status: success ? 'success' : 'error',
          combined_submission: record,
        })
        callback(error, response);
      });
    }

    this.originalGeneratePDF = this.generatePDF.bind(this);
    this.generatePDF = function (templateId, options, callback) {
      waitForPDFJob(options, function (waitCallback) {
        self.originalGeneratePDF(templateId, options, function (error, response) {
          if (error) {
            callback(error, response);
            return;
          }
          waitCallback(response.submission);
        });
      }, function (record, updateCallback) {
        self.getSubmission(record.id, function (error, submission) {
          if (error) {
            callback(error, response);
            return;
          }
          updateCallback(submission);
        });
      }, function (error, record, success) {
        if (error) {
          callback(error, record);
          return;
        }
        var response = CreateSubmissionResponse.constructFromObject({
          status: success? 'success' : 'error',
          submission: record,
        })
        callback(error, response);
      });
    };

    // this.batchGeneratePDF = function (templateId, createSubmissionData, callback) {
    // };
  };

  Client.prototype = Object.create(PDFApi.prototype);
  Client.prototype.constructor = Client;

  return Client;
}));
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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['api/PDFApi', 'ApiClient', 'model/AuthenticationError', 'model/AuthenticationSuccessResponse', 'model/CombinedSubmission', 'model/CombinedSubmissionData', 'model/CreateCombinedSubmissionResponse', 'model/CreateSubmissionData', 'model/CreateSubmissionResponse', 'model/Error', 'model/InvalidRequest', 'model/Submission', 'model/Template'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./PDFApi'), require('../ApiClient'), require('../model/AuthenticationError'), require('../model/AuthenticationSuccessResponse'), require('../model/CombinedSubmission'), require('../model/CombinedSubmissionData'), require('../model/CreateCombinedSubmissionResponse'), require('../model/CreateSubmissionData'), require('../model/CreateSubmissionResponse'), require('../model/Error'), require('../model/InvalidRequest'), require('../model/Submission'), require('../model/Template'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.PDFApi = factory(root.FormAPI.PDFApi, root.FormAPI.ApiClient, root.FormAPI.AuthenticationError, root.FormAPI.AuthenticationSuccessResponse, root.FormAPI.CombinedSubmission, root.FormAPI.CombinedSubmissionData, root.FormAPI.CreateCombinedSubmissionResponse, root.FormAPI.CreateSubmissionData, root.FormAPI.CreateSubmissionResponse, root.FormAPI.Error, root.FormAPI.InvalidRequest, root.FormAPI.Submission, root.FormAPI.Template);
  }
}(this, function (PDFApi, ApiClient, AuthenticationError, AuthenticationSuccessResponse, CombinedSubmission, CombinedSubmissionData, CreateCombinedSubmissionResponse, CreateSubmissionData, CreateSubmissionResponse, Error, InvalidRequest, Submission, Template) {
  'use strict';
  /**
   * PDF service.
   * @module api/Client
   * @version 1.0.0
   */

  // Object.create polyfill
  if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
      if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
      } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
      }

      if (typeof propertiesObject != 'undefined') {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
      }

      function F() { }
      F.prototype = proto;

      return new F();
    };
  }

  // Object.assign polyfill
  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  /**
   * Constructs a new Client.
   * @alias module:api/Client
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  function Client(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    PDFApi.call(this, this.apiClient);
    var self = this;

    var waitForPDFJob = function (_options, startJob, updateRecord, callback) {
      var options = Object.assign({}, _options);
      var timeout = options.timeout != null ? options.timeout : 60;
      delete options.timeout;
      var wait = options.wait == null ? true : !!options.wait;
      delete options.wait;

      startJob(function (record) {
        if (!wait || record.state != 'pending') {
          callback(null, record,
            record.state == 'pending' || record.state == 'processed');
          return;
        }
        var startTime = Math.floor(new Date() / 1000);

        var waitForPDF = function () {
          updateRecord(record, function (updatedRecord) {
            record = updatedRecord;
            if (record.state != 'pending') {
              callback(null, record, record.state == 'processed');
              return;
            }
            var currentTime = Math.floor(new Date() / 1000);
            if (currentTime - startTime > timeout) {
              callback(new Error("PDF job was not finished after " +
                timeout + " seconds!"), record, false);
            }
            setTimeout(waitForPDF, 1000);
          });
        }
        setTimeout(waitForPDF, 1000);
      })
    }

    this.originalCombineSubmissions = this.combineSubmissions.bind(this);
    this.combineSubmissions = function (options, callback) {
      waitForPDFJob(options, function (waitCallback) {
        self.originalCombineSubmissions(options, function (error, response) {
          if (error) {
            callback(error, response);
            return;
          }
          waitCallback(response.combined_submission);
        });
      }, function (record, updateCallback) {
        self.getCombinedSubmission(record.id, function (error, combinedSubmission) {
          if (error) {
            callback(error, response);
            return;
          }
          updateCallback(combinedSubmission);
        });
      }, function (error, record, success) {
        if (error) {
          callback(error, record);
          return;
        }
        var response = CreateCombinedSubmissionResponse.constructFromObject({
          status: success ? 'success' : 'error',
          combined_submission: record,
        })
        callback(error, response);
      });
    }

    this.originalGeneratePDF = this.generatePDF.bind(this);
    this.generatePDF = function (templateId, options, callback) {
      waitForPDFJob(options, function (waitCallback) {
        self.originalGeneratePDF(templateId, options, function (error, response) {
          if (error) {
            callback(error, response);
            return;
          }
          waitCallback(response.submission);
        });
      }, function (record, updateCallback) {
        self.getSubmission(record.id, function (error, submission) {
          if (error) {
            callback(error, response);
            return;
          }
          updateCallback(submission);
        });
      }, function (error, record, success) {
        if (error) {
          callback(error, record);
          return;
        }
        var response = CreateSubmissionResponse.constructFromObject({
          status: success ? 'success' : 'error',
          submission: record,
        })
        callback(error, response);
      });
    };

    // this.batchGeneratePDF = function (templateId, createSubmissionData, callback) {
    // };
  };

  Client.prototype = Object.create(PDFApi.prototype);
  Client.prototype.constructor = Client;

  return Client;
}));
