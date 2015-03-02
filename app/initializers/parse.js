
import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
      headers: {
        "X-Parse-Application-Id": "eMtwArkQKzBAMp13CIrY7jRH3LfS4w1gCenZLHiI",
        "X-Parse-REST-API-Key": "jzakGFO6cBv3OXI2tPAvy79MIAhfYmh0x9kU0Gny"
      }
  });

}

export default {
  name: 'parse',
  initialize: initialize
};
