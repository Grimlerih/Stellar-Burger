const url = "https://norma.nomoreparties.space/api";

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
  return request(`${url}/ingredients`);
}

export function orderCreationApi(idIngredients) {
  return request(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: idIngredients,
    }),
  });
}
