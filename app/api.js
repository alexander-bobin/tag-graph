var getLedger = function () {
  return fetch("app/data/source.json")
    .then(function (response) {
      return response.json();
    });
};

export { getLedger };
