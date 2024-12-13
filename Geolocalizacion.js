const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `<p>Tu posicion actual es:</p>
    <ul>
    <li>Latitud: <b>${coords.latitude}</b></li>
    <li>Longitud: <b>${coords.longitude}</b></li>
    <li>Precision: <b>${coords.accuracy}</b></li>
    </ul>
    <a href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj7tfTMudWJAxUiQjABHc72FnoQFnoECAsQAQ&url=https%3A%2F%2Fwww.google.com%2Fmaps&usg=AOvVaw3iZd580UcFrsnCyrwAwmaT&opi=89978449/@${coords.latitude},${coords.longitude},1z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error: ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
