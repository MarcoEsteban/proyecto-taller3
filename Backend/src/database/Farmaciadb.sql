------------ CREANDO LAS TABLAS ---------------
CREATE TABLE PERSONAS
(
	Codp SERIAL NOT NULL PRIMARY KEY,
	Nombre VARCHAR(40) NOT NULL,
	Ap VARCHAR(40),
	Am VARCHAR(40),
	Estado INTEGER NOT NULL DEFAULT 1,
	Fnac DATE NOT NULL,
	Genero VARCHAR(1) NOT NULL,
	Direc VARCHAR(50),
	Celular VARCHAR(20),
	Foto VARCHAR(50),
	Ecivil VARCHAR(1) NOT NULL
);
CREATE TABLE USUARIOS
(
	Codp INTEGER NOT NULL PRIMARY KEY,
	Cedula VARCHAR(15) NOT NULL,
	FOREIGN KEY (Codp) REFERENCES CPERSONAS (Codp)
);

CREATE TABLE PROVEEDOR
(
	Codp INTEGER NOT NULL PRIMARY KEY,
	Ru INTEGER NOT NULL,
	FOREIGN KEY (Codp) REFERENCES CPERSONAS (Codp)
);

-- =============================================================================
-- Creación de la tabla "Farmacia"
CREATE TABLE Farmacia (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Cliente"
CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Proveedor"
CREATE TABLE Proveedor (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Medicamento"
CREATE TABLE Medicamento (
    id INT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    fecha_vencimiento DATE NOT NULL,
    stock INT NOT NULL
);

-- Creación de la tabla "Venta"
CREATE TABLE Venta (
    id INT PRIMARY KEY,
    cliente_id INT,
    fecha_venta DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Creación de la tabla "Venta_Medicamento"
CREATE TABLE Venta_Medicamento (
    venta_id INT,
    medicamento_id INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES Venta(id),
    FOREIGN KEY (medicamento_id) REFERENCES Medicamento(id)
);

-- Creación de la tabla "Compra"
CREATE TABLE Compra (
    id INT PRIMARY KEY,
    proveedor_id INT,
    fecha_compra DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedor(id)
);

-- Creación de la tabla "Compra_Medicamento"
CREATE TABLE Compra_Medicamento (
    compra_id INT,
    medicamento_id INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (compra_id) REFERENCES Compra(id),
    FOREIGN KEY (medicamento_id) REFERENCES Medicamento(id)
);
