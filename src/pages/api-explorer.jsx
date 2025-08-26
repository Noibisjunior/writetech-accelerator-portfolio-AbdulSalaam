import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiExplorer() {
  return (
    <div style={{ height: "100vh" }}>
      <SwaggerUI 
        url="/openapi/chimoney.yaml"
        docExpansion="none"
        defaultModelsExpandDepth={-1}
      />
    </div>
  );
}
