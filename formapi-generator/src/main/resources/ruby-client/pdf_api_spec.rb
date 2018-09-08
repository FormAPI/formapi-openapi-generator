=begin
#API V1

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

OpenAPI spec version: v1

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 3.3.0-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for FormAPI::PDFApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'PDFApi' do
  before do
    FormAPI.configure do |c|
      c.username  = 'api_token123'
      c.password  = 'testsecret123'
      c.host = 'localhost:31337'
      c.scheme = 'http'
    end
  end

  let(:api_instance) { FormAPI::PDFApi.new }

  after do
    # run after each test
  end

  # integration tests for batch_generate_pdf
  # Generates multiple PDFs
  # @param template_id
  # @param create_submission_data
  # @param [Hash] opts the optional parameters
  # @return [Array<CreateSubmissionResponse>]
  describe 'batch_generate_pdf test' do
    it 'should work' do
      template_id = 'tpl_000000000000000001' # String |
      responses = api_instance.batch_generate_pdf(template_id, [
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
      ])
      expect(responses.size).to eq 2
      expect(responses.first.status).to eq 'success'
      submission = responses.first.submission
      expect(submission.id).to start_with 'sub_'
      expect(submission.expired).to eq false
      expect(submission.state).to eq 'pending'
    end
  end
  # integration tests for combine_submissions
  # Merge generated PDFs together
  # @param [Hash] opts the optional parameters
  # @option opts [CombinedSubmissionData] :combined_submission_data
  # @return [CreateCombinedSubmissionResponse]
  describe 'combine_submissions test' do
    it 'should work' do
      response = api_instance.combine_submissions(
        combined_submission_data: {
          submission_ids: %w[sub_000000000000000001 sub_000000000000000002],
        }
      )
      expect(response.status).to eq 'success'
      expect(response.combined_submission.id).to start_with 'com_'
      expect(response.combined_submission.state).to eq 'pending'
    end
  end
  # integration tests for expire_combined_submission
  # Expire a combined submission
  # @param combined_submission_id
  # @param [Hash] opts the optional parameters
  # @return [CombinedSubmission]
  describe 'expire_combined_submission test' do
    it 'should work' do
      combined_submission_id = 'com_000000000000000001' # String |
      combined_submission = api_instance.expire_combined_submission(combined_submission_id)
      expect(combined_submission.expired).to eq true
    end
  end
  # integration tests for expire_submission
  # Expire a PDF submission
  # @param submission_id
  # @param [Hash] opts the optional parameters
  # @return [Submission]
  describe 'expire_submission test' do
    it 'should work' do
      submission_id = 'sub_000000000000000001' # String |
      submission = api_instance.expire_submission(submission_id)
      expect(submission.expired).to eq true
    end
  end
  # integration tests for generate_pdf
  # Generates a new PDF
  # @param template_id
  # @param create_submission_data
  # @param [Hash] opts the optional parameters
  # @return [CreateSubmissionResponse]
  describe 'generate_pdf test' do
    it 'should work' do
      template_id = 'tpl_000000000000000001' # String |
      response = api_instance.generate_pdf(template_id,
        data: {
          title: 'Test PDF',
          description: 'This PDF is great!',
        })
      expect(response.status).to eq 'success'
      submission = response.submission
      expect(submission.id).to start_with 'sub_'
      expect(submission.expired).to eq false
      expect(submission.state).to eq 'pending'
    end
  end
  # integration tests for get_combined_submission
  # Check the status of a combined submission (merged PDFs)
  # @param combined_submission_id
  # @param [Hash] opts the optional parameters
  # @return [CombinedSubmission]
  describe 'get_combined_submission test' do
    it 'should work' do
      combined_submission_id = 'com_000000000000000001' # String |
      combined_submission = api_instance.get_combined_submission(combined_submission_id)
      expect(combined_submission.id).to start_with 'com_'
    end
  end
  # integration tests for get_submission
  # Check the status of a PDF
  # @param submission_id
  # @param [Hash] opts the optional parameters
  # @return [Submission]
  describe 'get_submission test' do
    it 'should work' do
      submission_id = 'sub_000000000000000001' # String |
      submission = api_instance.get_submission(submission_id)
      expect(submission.id).to start_with 'sub_'
    end
  end
  # integration tests for get_templates
  # Get a list of all templates
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Default: 1
  # @option opts [Integer] :per_page Default: 50
  # @return [Array<Template>]
  describe 'get_templates test' do
    it 'should work' do
      opts = {
        page: 1, # Integer | Default: 1
        per_page: 10 # Integer | Default: 50
      }
      templates = api_instance.get_templates(opts)
      expect(templates.size).to eq 2
      expect(templates.first.id).to start_with 'tpl_'
    end
  end
  # integration tests for test_authentication
  # Test Authentication
  # @param [Hash] opts the optional parameters
  # @return [AuthenticationSuccessResponse]
  describe 'test_authentication test' do
    it 'should work' do
      response = api_instance.test_authentication
      expect(response.status).to eq 'success'
    end
  end
end
