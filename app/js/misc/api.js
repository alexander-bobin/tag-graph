import Papa from 'papaparse';

var getData = function () {
  var prom = new Promise(function(resolve, reject) {
    Papa.parse("data/source.csv", {
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
};

export { getData };
