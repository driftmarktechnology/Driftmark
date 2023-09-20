import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIX_PANEL);

export const trackEvent = (name, properties) => {
  mixpanel.track(name, properties);
};

export const identifyUser = (id) => {
  mixpanel.identify(id);
};
