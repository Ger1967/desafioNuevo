import API from "./Rule_API";

export const list = async () => {
  let url = "/api/deportistas";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const listEstadisticas = async () => {
  let url = "/api/estadisticas";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const getEstadisticasById = async (id) => {
  let url = "/api/estadisticas/" + id;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};
