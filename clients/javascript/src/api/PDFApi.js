/**
 * API V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Data from '../model/Data';
import Data1 from '../model/Data1';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse201 from '../model/InlineResponse201';
import InlineResponse2011 from '../model/InlineResponse2011';
import InlineResponse2011Submission from '../model/InlineResponse2011Submission';
import InlineResponse201CombinedSubmission from '../model/InlineResponse201CombinedSubmission';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse422 from '../model/InlineResponse422';

/**
* PDF service.
* @module api/PDFApi
* @version 1.0.0
*/
export default class PDFApi {

    /**
    * Constructs a new PDFApi.
    * @alias module:api/PDFApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the combineSubmissions operation.
     * @callback module:api/PDFApi~combineSubmissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge generated PDFs together
     * @param {Object} opts Optional parameters
     * @param {module:model/Data} opts.data
     * @param {module:api/PDFApi~combineSubmissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    combineSubmissions(opts, callback) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/combined_submissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the expireCombinedSubmission operation.
     * @callback module:api/PDFApi~expireCombinedSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201CombinedSubmission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Expire a combined submission
     * @param {String} combinedSubmissionId
     * @param {module:api/PDFApi~expireCombinedSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201CombinedSubmission}
     */
    expireCombinedSubmission(combinedSubmissionId, callback) {
      let postBody = null;

      // verify the required parameter 'combinedSubmissionId' is set
      if (combinedSubmissionId === undefined || combinedSubmissionId === null) {
        throw new Error("Missing the required parameter 'combinedSubmissionId' when calling expireCombinedSubmission");
      }


      let pathParams = {
        'combined_submission_id': combinedSubmissionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse201CombinedSubmission;

      return this.apiClient.callApi(
        '/combined_submissions/{combined_submission_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the expireSubmission operation.
     * @callback module:api/PDFApi~expireSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011Submission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Expire a PDF submission
     * @param {String} submissionId
     * @param {module:api/PDFApi~expireSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011Submission}
     */
    expireSubmission(submissionId, callback) {
      let postBody = null;

      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling expireSubmission");
      }


      let pathParams = {
        'submission_id': submissionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011Submission;

      return this.apiClient.callApi(
        '/submissions/{submission_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generatePDF operation.
     * @callback module:api/PDFApi~generatePDFCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a new PDF
     * @param {String} templateId
     * @param {Object} opts Optional parameters
     * @param {module:model/Data1} opts.data
     * @param {module:api/PDFApi~generatePDFCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    generatePDF(templateId, opts, callback) {
      opts = opts || {};
      let postBody = opts['data'];

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling generatePDF");
      }


      let pathParams = {
        'template_id': templateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/templates/{template_id}/submissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCombinedSubmission operation.
     * @callback module:api/PDFApi~getCombinedSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201CombinedSubmission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the status of a combined submission (merged PDFs)
     * @param {String} combinedSubmissionId
     * @param {module:api/PDFApi~getCombinedSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201CombinedSubmission}
     */
    getCombinedSubmission(combinedSubmissionId, callback) {
      let postBody = null;

      // verify the required parameter 'combinedSubmissionId' is set
      if (combinedSubmissionId === undefined || combinedSubmissionId === null) {
        throw new Error("Missing the required parameter 'combinedSubmissionId' when calling getCombinedSubmission");
      }


      let pathParams = {
        'combined_submission_id': combinedSubmissionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse201CombinedSubmission;

      return this.apiClient.callApi(
        '/combined_submissions/{combined_submission_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubmission operation.
     * @callback module:api/PDFApi~getSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011Submission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the status of a PDF
     * @param {String} submissionId
     * @param {module:api/PDFApi~getSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011Submission}
     */
    getSubmission(submissionId, callback) {
      let postBody = null;

      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling getSubmission");
      }


      let pathParams = {
        'submission_id': submissionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011Submission;

      return this.apiClient.callApi(
        '/submissions/{submission_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testAuthentication operation.
     * @callback module:api/PDFApi~testAuthenticationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test Authentication
     * @param {module:api/PDFApi~testAuthenticationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    testAuthentication(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/authentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}