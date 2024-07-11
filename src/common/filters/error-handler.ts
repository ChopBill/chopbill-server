export class ErrorHandler extends Error {
  public success: boolean;
  public status: number;

  constructor({
    success,
    message,
    status,
  }: {
    success: boolean;
    message: string | string[];
    status: number;
  }) {
    super(Array.isArray(message) ? message.join(' | ') : message);
    this.success = success;
    this.status = status;
  }
}
