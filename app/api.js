var getLedger = function () {
  return fetch("app/data/main-account.json")
    .then(function (response) {
      return response.json();
    });
};

export { getLedger };
