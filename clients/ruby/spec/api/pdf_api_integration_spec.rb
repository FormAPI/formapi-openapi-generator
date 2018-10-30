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
      c.api_token_id = 'api_token123'
      c.api_token_secret = 'testsecret123'
      c.host = 'http://localhost:31337'
    end
  end

  let(:api_instance) { FormAPI::PDFApi.new }

  after do
    # run after each test
  end

  # integration tests for batch_generate_pdf (v1)
  # Generates multiple PDFs
  # @param template_id
  # @param create_submission_data
  # @param [Hash] opts the optional parameters
  # @return [Array<CreateSubmissionResponse>]
  describe 'batch_generate_pdf v1 test' do
    it 'should work' do
      template_id = 'tpl_000000000000000001'
      responses = api_instance.batch_generate_pdf_v1(template_id, [
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

  # Integration tests for batch_generate_pdf (v2)
  describe 'batch_generate_pdfs v2 test' do
    it 'should work' do
      template_id = 'tpl_000000000000000001'
      response = api_instance.batch_generate_pdfs(
        metadata: { user_id: 123 },
        test: true,
        submissions: [
          {
            template_id: template_id,
            data: {
              title: 'Test PDF',
              description: 'This PDF is great!',
            }
          },
          {
            template_id: template_id,
            data: {
              title: 'Test PDF 2',
              description: 'This PDF is also great!',
            }
          }
        ]
      )
      expect(response.status).to eq 'success'
      batch = response.submission_batch
      expect(batch.id).to start_with 'sba_'
      expect(batch.state).to eq 'pending'
      expect(batch.total_count).to eq 2
      expect(batch.pending_count).to eq 2
      expect(batch.error_count).to eq 0
      expect(batch.completion_percentage).to eq 0

      expect(response.submissions.size).to eq 2
      submission_response = response.submissions.first
      expect(submission_response.status).to eq 'success'
      submission = submission_response.submission
      expect(submission.id).to start_with 'sub_'
      expect(submission.expired).to eq false
      expect(submission.state).to eq 'pending'
    end
  end

  describe 'get_submission_batch test' do
    it 'should get the batch including submissions' do
      submission_batch_id = 'sba_000000000000000001'
      batch = api_instance.get_submission_batch(submission_batch_id, include_submissions: true)
      expect(batch.id).to eq 'sba_000000000000000001'
      expect(batch.total_count).to eq 2
      expect(batch.pending_count).to eq 0
      expect(batch.completion_percentage).to eq 100
      expect(batch.state).to eq 'processed'
      expect(batch.submissions.count).to eq 2
    end

    it 'should get the batch without submissions' do
      submission_batch_id = 'sba_000000000000000001'
      batch = api_instance.get_submission_batch(submission_batch_id)
      expect(batch.id).to eq 'sba_000000000000000001'
      expect(batch.submissions).to be_nil
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
        submission_ids: %w[sub_000000000000000001 sub_000000000000000002])
      expect(response.status).to eq 'success'
      expect(response.combined_submission.id).to start_with 'com_'
      expect(response.combined_submission.state).to eq 'pending'
    end
  end
  # integration tests for create_data_request_token
  # Creates a new data request token for form authentication
  # @param data_request_id
  # @param [Hash] opts the optional parameters
  # @return [CreateSubmissionDataRequestTokenResponse]
  describe 'create_data_request_token test' do
    it 'should work' do
      data_request_id = 'drq_000000000000000001' # String |
      response = api_instance.create_data_request_token(data_request_id)
      expect(response.status).to eq 'success'
      expect(response.token.id).to_not be_nil
      expect(response.token.secret).to_not be_nil
      expect(response.token.data_request_url).to start_with \
        'http://localhost/data_requests/drq_000000000000000001?token_id='
      expect(response.token.data_request_url).to include \
        "?token_id=#{response.token.id}" \
        "&token_secret=#{response.token.secret}"
    end
  end
  # integration tests for expire_combined_submission
  # Expire a combined submission
  # @param combined_submission_id
  # @param [Hash] opts the optional parameters
  # @return [CombinedSubmission]
  describe 'expire_combined_submission test' do
    it 'should work' do
      combined_submission_id = 'com_000000000000000001'
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
      submission_id = 'sub_000000000000000001'
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
      template_id = 'tpl_000000000000000001'
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
  # integration tests for generate_pdf with data requests
  # Generates a new PDF
  # @param template_id
  # @param create_submission_data
  # @param [Hash] opts the optional parameters
  # @return [CreateSubmissionResponse]
  describe 'generate_pdf test with data_requests' do
    it 'should work' do
      template_id = 'tpl_000000000000000001'
      response = api_instance.generate_pdf(template_id,
        data: {
          title: 'Test PDF',
        },
        data_requests: [
          {
            name: 'John Smith',
            email: 'jsmith@example.com',
            fields: ['description'],
            order: 1,
            auth_type: 'email_link',
          }
        ]
      )
      expect(response.status).to eq 'success'
      submission = response.submission
      expect(submission.id).to start_with 'sub_'
      expect(submission.expired).to eq false
      expect(submission.state).to eq 'waiting_for_data_requests'

      data_requests = submission.data_requests
      expect(data_requests.count).to eq 1
      data_request = data_requests.first

      expect(data_request.id).to start_with 'drq_'
      expect(data_request.state).to eq 'pending'
      expect(data_request.fields).to eq ['description']
      expect(data_request.order).to eq 1
      expect(data_request.name).to eq 'John Smith'
      expect(data_request.email).to eq 'jsmith@example.com'
    end
  end

  # integration tests for get_combined_submission
  # Check the status of a combined submission (merged PDFs)
  # @param combined_submission_id
  # @param [Hash] opts the optional parameters
  # @return [CombinedSubmission]
  describe 'get_combined_submission test' do
    it 'should work' do
      combined_submission_id = 'com_000000000000000001'
      combined_submission = api_instance.get_combined_submission(combined_submission_id)
      expect(combined_submission.id).to start_with 'com_'
    end
  end
  # integration tests for get_data_request
  # Look up a submission data request
  # @param data_request_id
  # @param [Hash] opts the optional parameters
  # @return [SubmissionDataRequest]
  describe 'get_data_request test' do
    it 'should work' do
      data_request_id = 'drq_000000000000000001' # String |
      data_request = api_instance.get_data_request(data_request_id)
      expect(data_request.id).to start_with 'drq_'
      expect(data_request.order).to eq 1
      expect(data_request.name).to eq 'John Doe'
      expect(data_request.email).to eq 'jdoe@example.com'
      expect(data_request.fields).to eq ['description']
      expect(data_request.metadata).to eq(user_id: 123)
      expect(data_request.state).to eq 'pending'
      expect(data_request.viewed_at).to be_nil
      expect(data_request.completed_at).to be_nil
    end
  end

  # integration tests for update_data_request
  # Update a submission data request
  # @param data_request_id
  # @param [Hash] opts the optional parameters
  # @return [SubmissionDataRequest]
  describe 'get_data_request test' do
    it 'should work' do
      data_request_id = 'drq_000000000000000001' # String |
      response = api_instance.update_data_request(
        data_request_id,
        name: 'Harry Smith',
        email: 'hsmith@example.com',
        order: 2,
        fields: ['title'],
        metadata: { user_id: 345 },
        auth_type: 'oauth',
        auth_provider: 'twitter',
        auth_session_started_at: '2018-10-23T13:00:00Z'
      )
      expect(response.status).to eq 'success'
      data_request = response.data_request
      expect(data_request.id).to start_with 'drq_'
      # Not allowed to update order, name, email, etc.
      expect(data_request.order).to eq 1
      expect(data_request.name).to eq 'John Doe'
      expect(data_request.email).to eq 'jdoe@example.com'
      expect(data_request.fields).to eq ['description']
      expect(data_request.metadata).to eq(user_id: 345)
      expect(data_request.state).to eq 'pending'
      expect(data_request.viewed_at).to be_nil
      expect(data_request.completed_at).to be_nil
      expect(data_request.auth_type).to eq 'oauth'
      expect(data_request.auth_provider).to eq 'twitter'
      expect(data_request.auth_session_started_at).to eq '2018-10-23T13:00:00Z'
    end
  end
  # integration tests for get_submission
  # Check the status of a PDF
  # @param submission_id
  # @param [Hash] opts the optional parameters
  # @return [Submission]
  describe 'get_submission test' do
    it 'should work' do
      submission_id = 'sub_000000000000000001'
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
