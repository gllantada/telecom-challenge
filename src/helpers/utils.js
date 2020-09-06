export const groupByDay = (list) => {
  let day = new Date(list[0].dt_txt).getDate();
  let index = 0;
  var rta = {};
  rta[index] = [];

  list.forEach((elm) => {
    if (day !== new Date(elm.dt_txt).getDate()) {
      index++;
      rta[index] = [];
      day = new Date(elm.dt_txt).getDate();
    }
    rta[index].push(elm);
  });
  return rta;
};
export const getCurrentLocation = (geolocation) => {
  const { latitude, longitude } = geolocation.coords;
  return {
    latitude,
    longitude,
  };
};
