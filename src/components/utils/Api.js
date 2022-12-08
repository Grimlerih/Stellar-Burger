const url = "https://norma.nomoreparties.space/api/ingredients";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function getData() {
  return request(url);
}
