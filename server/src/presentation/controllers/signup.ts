import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }
    return {
      statusCode: 200,
      body: '',
    };
  }
}
