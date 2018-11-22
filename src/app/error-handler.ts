import {  ErrorHandler, Injectable } from "@angular/core";


import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://4f3617e472154398ab5fb52530c3ec12@sentry.io/1328589"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    console.error(error);
    throw error;
  }
}

