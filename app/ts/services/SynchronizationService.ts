export class SynchronizationService {
  async loadData(handler: ResponseHandler): Promise<Response> {
    const response = await fetch('http://localhost:8080/data');
    let ret = response;

    if (handler) {
      ret = handler(response);
    }

    return ret;
  }
}

export interface ResponseHandler {
  (res: Response): Response;
}
