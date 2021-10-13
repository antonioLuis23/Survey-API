import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }
    return {
      statusCode: 200,
      body: '',
    };
  }
}
