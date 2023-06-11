// Obtener los datos del Local Storage
export function getDataFromLocalStorage() {
    const data = localStorage.getItem('crudData');
    return data ? JSON.parse(data) : [];
}

// Guardar los datos en el Local Storage
export function saveDataToLocalStorage(data) {
    localStorage.setItem('crudData', JSON.stringify(data));
}

// Crear un nuevo elemento
export function createItem(item) {
    const data = getDataFromLocalStorage();
    data.push(item);
    saveDataToLocalStorage(data);
}

// Leer todos los elementos
export function readAllItems() {
    return getDataFromLocalStorage();
}

// Leer un elemento por su ID
export function readItemById(id) {
    const data = getDataFromLocalStorage();
    return data.find(item => item.id === id);
}

// Actualizar un elemento por su ID
export function updateItemById(id, updatedItem) {
    const data = getDataFromLocalStorage();
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedItem };
        saveDataToLocalStorage(data);
        return true;
    }
    return false;
}

// Eliminar un elemento por su ID
export function deleteItemById(id) {
    const data = getDataFromLocalStorage();
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        saveDataToLocalStorage(data);
        return true;
    }
    return false;
}
