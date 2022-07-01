const GeoCoder = function () {
  this.getLatLng = function (address) {
    if (address === "Amsterdam") return "52.3700° N, 4.8900° E";
    else if (address === "London") return "51.5171° N, 0.1062° W";
    else if (address === "Paris") return "48.8742° N, 2.3470° E";
    else if (address === "Berlin") return "52.5233° N, 13.4127° E";
    else return "";
  };
};

const GeoProxy = function () {
  const geocoder = new GeoCoder();
  const geocache = {};
  let count = 0;

  return {
    getLatLng: function (address) {
      if (!geocache[address]) {
        geocache[address] = geocoder.getLatLng(address);
        count++;
      }
      console.log(address + ": " + geocache[address]);
      return geocache[address];
    },
    getCount: () => count,
  };
};

function run() {
  const geo = new GeoProxy();

  geo.getLatLng("Paris");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("London");
  geo.getLatLng("London");

  console.log("\nCache size: " + geo.getCount()); // 3
}
run();
