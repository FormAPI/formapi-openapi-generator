### 1.10.1 [July 3, 2019]
* Fixed combineSubmissions and combinePdfs helpers when "strict mode" is enabled by setting error_reporting

### 1.10.0 [July 3, 2019]
* Added combinePdfs wrapper that handles polling and doesn't return a pending combined submission job

### 1.9.0 [June 22, 2019]
* **BREAKING CHANGE** Renamed "Get Templates" endpoint to "List Templates". Added a search query parameter.

### 1.8.0 [April 11, 2019]
* Added support for editable PDFS (editable: true)

### 1.7.0 [December 23, 2018]
* Added CustomFiles, and combinePdf call to support many different types of source PDFs. Renamed a few models

### 1.6.0 [December 18, 2018]
* Updated API host to api.formapi.io

### 1.5.0 [December 13, 2018]
* Fix model name for newly created Templates (PendingTemplate)
* Added "actions" to submission and combined_submission responses. Includes information about custom S3 uploads

### 1.4.0 [December 1, 2018]
* Added Create Template, Get Template, and Get Template Schema endpoints

### 1.3.1 [November 4, 2018]
* Initial changelog
