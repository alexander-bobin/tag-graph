import Papa from 'papaparse';

var getLedger = function () {
  var prom = new Promise(function(resolve, reject) {
    Papa.parse("app/data/source.csv", {
      download: true,
      header: true,
      complete: function (data) {
        resolve(data);
      },
      error: function (data) {
        reject();
      }
    })
  });
  return prom;
  // return fetch("app/data/source.json")
  //   .then(function (response) {
  //     return response.json();
  //   });
};

export { getLedger };
