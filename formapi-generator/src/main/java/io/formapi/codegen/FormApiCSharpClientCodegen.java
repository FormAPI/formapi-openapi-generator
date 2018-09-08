package io.formapi.codegen;

import org.openapitools.codegen.*;
import org.openapitools.codegen.languages.CSharpClientCodegen;
// import io.swagger.v3.oas.models.parameters.Parameter;
// import io.swagger.v3.oas.models.media.Schema;
// import io.swagger.v3.oas.models.examples.Example;

public class FormApiCSharpClientCodegen extends CSharpClientCodegen {
  public FormApiCSharpClientCodegen() {
    super();
    // Don't use formapi-sharp
    embeddedTemplateDir = templateDir = "csharp";
  }

  @Override
  public String getName() {
    return "formapi-csharp";
  }

  @Override
  public void processOpts() {
    super.processOpts();
    supportingFiles.add(new SupportingFile("PDFApiTests.cs", "src/FormApi.Client.Test/Api/PDFApiTests.cs"));
  }
}