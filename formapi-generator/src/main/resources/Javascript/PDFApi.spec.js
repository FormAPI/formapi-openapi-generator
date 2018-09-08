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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FormAPI);
  }
}(this, function (expect, FormAPI) {
  'use strict';

  var instance;

  beforeEach(function () {
    // We test the default configuration in this test,
    // and a configuration instance in Client.spec.js
    var defaultConfiguration = FormAPI.Configuration.instance;
    // Configure HTTP basic authorization: api_token_basic
    defaultConfiguration.apiTokenId = 'api_token123';
    defaultConfiguration.apiTokenSecret = 'testsecret123';
    defaultConfiguration.basePath = 'http://localhost:31337/api/v1'
    instance = new FormAPI.PDFApi();
  });

  describe('PDFApi', function () {
    describe('batchGeneratePDF', function () {
      it('should call batchGeneratePDF successfully', function (done) {
        var templateId = 'tpl_000000000000000001';
        var submissionData = [
          {
            data: {
              title: 'Test PDF',
              description: 'This PDF is great!',
            }
          },
          {
            data: {
              title: 'Test PDF 2',
              description: 'This PDF is also great!',
            }
          }
        ];
        instance.batchGeneratePDF(templateId, submissionData, function (error, responses) {
          if (error) throw error;
          expect(responses.length).to.be(2);
          var firstResponse = responses[0];
          expect(firstResponse.status).to.be('success');
          var firstSubmission = firstResponse.submission;
          expect(firstSubmission.id).to.match(/^sub_/);
          expect(firstSubmission.expired).to.be(false);
          expect(firstSubmission.state).to.be('pending');
          done();
        });
      });
    });

    describe('combineSubmissions', function () {
      it('should call combineSubmissions successfully', function (done) {
        var opts = {
          combinedSubmissionData: {
            submission_ids: ['sub_000000000000000001', 'sub_000000000000000002']
          }
        };
        instance.combineSubmissions(opts, function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          expect(response.combined_submission.id).to.match(/^com_/);
          expect(response.combined_submission.state).to.be('pending');
          done();
        });
      });
    });
    describe('expireCombinedSubmission', function () {
      it('should call expireCombinedSubmission successfully', function (done) {
        var combinedSubmissionId = 'com_000000000000000001';
        instance.expireCombinedSubmission(combinedSubmissionId, function (error, response) {
          if (error) throw error;
          expect(response.expired).to.be(true);
          done();
        });
      });
    });
    describe('expireSubmission', function () {
      it('should call expireSubmission successfully', function (done) {
        var submissionId = 'sub_000000000000000001';
        instance.expireSubmission(submissionId, function (error, response) {
          if (error) throw error;
          expect(response.expired).to.be(true);
          done();
        });
      });
    });
    describe('generatePDF', function () {
      it('should call generatePDF successfully', function (done) {
        var templateId = 'tpl_000000000000000001';
        var submissionData = {
          data: {
            title: 'Test PDF',
            description: 'This PDF is great!',
          }
        };
        instance.generatePDF(templateId, submissionData, function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          var submission = response.submission;
          expect(submission.id).to.match(/^sub_/);
          expect(submission.expired).to.be(false);
          expect(submission.state).to.be('pending');
          done();
        });
      });
    });
    describe('getCombinedSubmission', function () {
      it('should call getCombinedSubmission successfully', function (done) {
        var combinedSubmissionId = 'com_000000000000000001';
        instance.getCombinedSubmission(combinedSubmissionId, function (error, response) {
          if (error) throw error;
          expect(response.id).to.match(/^com_/);
          done();
        });
      });
    });
    describe('getSubmission', function () {
      it('should call getSubmission successfully', function (done) {
        var submissionId = 'sub_000000000000000001';
        instance.getSubmission(submissionId, function (error, response) {
          if (error) throw error;
          expect(response.id).to.match(/^sub_/);
          done();
        });
      });
    });
    describe('getTemplates', function () {
      it('should call getTemplates successfully', function (done) {
        var opts = {
          page: 1,
          per_page: 10
        };
        instance.getTemplates(opts, function (error, templates) {
          if (error) throw error;
          expect(templates.length).to.be(2);
          expect(templates[0].id).to.match(/^tpl_/);
          done();
        });
      });
    });
    describe('testAuthentication', function () {
      it('should call testAuthentication successfully', function (done) {
        instance.testAuthentication(function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          done();
        });
      });
    });
  });
}));
