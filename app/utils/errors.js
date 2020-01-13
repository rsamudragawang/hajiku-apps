import I18n from '../i18n';

/**
 * NodeJS processing environment variable
 * */
export const CURRENT_ENVIRONMENT = process.env.NODE_ENV || '';

/**
 * Handlers errors and subscriptions for errors
 */
class ErrorManager {
  constructor(env) {
    this.environment = env;
    this.subscribers = [];
  }

  get managerEnvironment() {
    return this.environment;
  }

  /**
   * Report that an unexpected error has occured
   * @param {String} message  - message to display during error
   * @param {Object} error - details of the error
   * @param {Boolean} isLocal - Determines whether is a global or localized error
   */
  createError = (errorHeader, error, isLocal) => {
    this._notifySubscribers(errorHeader, error, isLocal);
  };

  /**
   * Subscribe to errors occuring
   * @param {Function} subscriber - (message, error) => ...
   */
  subscribe = subscriber => {
    this.subscribers.push(subscriber);
  };
  /**
   * Remove original subscriber
   * @param {Function} subscriber - function that was used to subscribe for changes
   */
  unsubscribe = subscriber => {
    const index = this.subscribers.indexOf(subscriber);

    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  };
  /* eslint-disable no-else-return */
  /* eslint-disable no-lonely-if */
  messageDisplayingMode = notification => {
    const { errorHeader, error = {} } = notification;
    const { code = 0 } = error;
    const environment = this.managerEnvironment;
    if (environment === 'development') {
      const { message = '' } = error;
      return { header: errorHeader, errorMessage: message };
    } else {
      if (code && code >= 500) {
        return { header: I18n.t('critical'), errorMessage: I18n.t('500') };
      } else if (code && code < 500 && code > 399) {
        return { header: I18n.t('badRequest'), errorMessage: I18n.t('unauthorizedRequest') };
      } else {
        return {
          header: I18n.t('noInternetConnection'),
          errorMessage: I18n.t('noInternetConnectionMessage')
        };
      }
    }
  };

  _notifySubscribers(errorHeader, error, isLocal) {
    const { header = '', errorMessage = '' } = this.messageDisplayingMode({ errorHeader, error });

    this.subscribers.forEach(subscriber => subscriber(header, errorMessage, isLocal));
  }
}
export { ErrorManager };
export default new ErrorManager(CURRENT_ENVIRONMENT);
