import axios from 'axios';

const URL = 'http://localhost:5000/rol';

export const getRolRequest = async () =>
    await axios.get(`${URL}`);

export const getOneRolRequest = async (id) =>
    await axios.get(`${URL}/${id}`);

export const createRolRequest = async (rol) => {
    await axios.post(`${URL}`, rol)
}

export const updateRolRequest = async (rol) => {
    await axios.post(`${URL}/${id}`, rol)
}

export const deleteRolRequest = async (id) =>
    await axios.delete(`${URL}/${id}`);
