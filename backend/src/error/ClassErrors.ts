import StatusHttp from '../enum/statusHttp';

export default class Errors {
  static notFound(message: string) {
    return {
      message,
      statusCode: StatusHttp.NOT_FOUND,
      stack: Error().stack,
    };
  }
    
    static conflict(message: string) {
      return {
        message,
        statusCode: StatusHttp.CONFLICT,
        stack: Error().stack,
      };
    }
}