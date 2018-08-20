"use strict";

import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://spike-crowdsource.herokuapp.com/crowdsource/";

const responseBody = res => res.body;

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
  all: page => requests.get(`/review`)
};

export default {
  Articles
};
