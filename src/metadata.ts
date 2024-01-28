/* eslint-disable */
export default async () => {
    const t = {
        ["./common/dtos/baseApi-response.dto"]: await import("./common/dtos/baseApi-response.dto")
    };
    return { "@nestjs/swagger/plugin": { "models": [[import("./common/dtos/baseApi-response.dto"), { "BaseApiResponse": { data: { required: true }, meta: { required: true, type: () => Object } }, "BaseApiErrorObject": { statusCode: { required: true, type: () => Number }, message: { required: true, type: () => String }, localizedMessage: { required: true, type: () => String }, errorName: { required: true, type: () => String }, details: { required: true, type: () => Object }, path: { required: true, type: () => String }, requestId: { required: true, type: () => String }, timestamp: { required: true, type: () => String } }, "BaseApiErrorResponse": { error: { required: true, type: () => t["./common/dtos/baseApi-response.dto"].BaseApiErrorObject } } }]], "controllers": [[import("./app/app.controller"), { "AppController": { "getStatus": { type: String } } }], [import("./demo/controller/demo.controller"), { "DemoController": { "getHelloName": { type: String } } }]] } };
};