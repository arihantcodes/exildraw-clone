interface ApiErrorInterface {
    statusCode: number
    message: string
    errors: any
    stack?: string
  }
  
  class ApiError extends Error implements ApiErrorInterface {
    statusCode: number
    errors: any
    stack?: string
  
    constructor(
      statusCode: number,
      message = "Something went wrong",
      errors: any = [],
      stack?: string
    ) {
      super(message)
      this.statusCode = statusCode
      this.message = message
      this.errors = errors
  
      if (stack) {
        this.stack = stack
      } else {
        Error.captureStackTrace(this, this.constructor)
      }
    }
  }
  
  export { ApiError }
  