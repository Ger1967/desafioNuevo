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

export const postDeportista = async (deportista) => {
  let url = "/api/deportistas/register";
  return await API.post(url, deportista)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const postEstadistica = async (estadistica) => {
  let url = "/api/deportistas/add/estadisticas";
  return await API.post(url, estadistica)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const deleteDeportista = async (id) => {
  let url = "/api/deportistas/delete/" + id;
  return await API.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

// export const addFoto = async () => {
//   let url = "/api/deportistas/add/foto";
//   return await API.post(url)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//       throw error.response.data.error || "Error precesando la solicitud";
//     });
// };
