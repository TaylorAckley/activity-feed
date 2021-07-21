import settings from  './../../config.json';

export const environment = {
  production: true,
  auth: {
    domain: settings.domain,
    clientId: settings.clientId
  },
  apiUrl: 'https://ta-activity-feed-u6j4y.ondigitalocean.app/api'
};
