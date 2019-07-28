
const btn = document.querySelector(".btn");
const msgDisplay = document.querySelector("#msg");
const status = true;


btn.addEventListener("click", () => {
  afterSetTime(3000).catch(err => console.log(err));
  getCurrentLocation();
});

function afterSetTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        return resolve(
          (msgDisplay.textContent = "I am called asynchronously")
        );
      } else {
        return reject(Error("Error"));
      }
    }, resolveAfter);
  });
}


function getCurrentLocation() {
  const promise1 = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      const currentLocation = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };
      resolve(
        renderLocationOnGoogleMap(
          currentLocation.latitude,
          currentLocation.longitude
        )
      );
      reject(Error("fail"));
    });
  });
  return promise1
    .then(console.log("Map is rendered"))
    .catch(err => consoel.log(err));
}

function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector("#map");
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 12
  });
}