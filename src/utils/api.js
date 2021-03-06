import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export function getProtocolsList() {
  return axios
    .get(`${REACT_APP_API_URL}/api/clinic/protocols`)
    .then((res) => res.data.protocols);
}
export function getClientsList() {
  return axios.get(`${REACT_APP_API_URL}/api/clients`).then((res) => res.data);
}

export function getSurveysList() {
  return axios
    .get(`${REACT_APP_API_URL}/api/clinic/surveys`)
    .then((res) => res.data.surveys);
}

export function fetchProtocols() {
  return axios.get(`${REACT_APP_API_URL}/api/clinic/protocols`).then((res) => {
    const options = res.data.protocols.map((protocol) => ({
      label: protocol.name,
      value: protocol.id,
    }));
    return options;
  });
}

export function postClient(data) {
  if (data.protocolId === "") {
    throw new Error("Please Choose A Protocol");
  } else {
    return axios.post(`${REACT_APP_API_URL}/api/client/register`, data);
  }
}

export function addSurvey(survey) {
  return axios.post(`${REACT_APP_API_URL}/api/clinic/survey/add`, survey);
}
