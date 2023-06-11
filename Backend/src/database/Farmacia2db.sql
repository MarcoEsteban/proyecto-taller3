-- Creación de la tabla "Rol"
CREATE TABLE Rol (
    id_rol SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Creación de la tabla "Persona"
CREATE TABLE Personas (
    id_personas SERIAL PRIMARY KEY,
    ci UNIQUE INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_p VARCHAR(100),
    apellido_m VARCHAR(100),
    sexo VARCHAR(50) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    celular INTEGER,
    foto VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    estado INTEGER NOT NULL DEFAULT 1
);

-- Creación de la tabla "Usuario"
CREATE TABLE Usuarios (
    id_usuarios SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    rol_id INTEGER NOT NULL,
    persona_id INTEGER NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES Rol(id_rol),
    FOREIGN KEY (persona_id) REFERENCES Personas(id_personas)
);

-- Creación de la tabla "Farmacia"
CREATE TABLE Farmacia (
    id_farmacia SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    celular INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL,
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id_usuarios)
);

-- Creación de la tabla "Cliente"
CREATE TABLE Clientes (
    id_clientes SERIAL PRIMARY KEY,
    dni_ci VARCHAR(100) NOT NULL,
    persona_id INTEGER,
    FOREIGN KEY (persona_id) REFERENCES Personas(id_personas)
);

-- Creación de la tabla "Proveedor"
CREATE TABLE Proveedor (
    id_proveedor SERIAL PRIMARY KEY,
    nombre_empresa VARCHAR(100) NOT NULL,
    persona_id INTEGER,
    FOREIGN KEY (persona_id) REFERENCES Personas(id_personas)
);

-- Creación de la tabla "Laboratorio"
CREATE TABLE Laboratorio (
    id_laboratorio SERIAL  PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Forma_Farmaceutica"
CREATE TABLE Forma_Farmaceutica (
    id_forma_farmaceutica SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Ubicacion"
CREATE TABLE Ubicacion (
    id_ubicacion SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Concentracion"
CREATE TABLE Concentracion (
    id_concentracion SERIAL PRIMARY KEY,
    valor INTEGER NOT NULL,
    unidad VARCHAR(20) NOT NULL
);

-- Creación de la tabla "Via_Administracion"
CREATE TABLE Via_Administracion (
    id_via_administracion SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Medicamento"
CREATE TABLE Medicamentos (
    id_medicamentos SERIAL PRIMARY KEY,
    codigo INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    laboratorio_id INTEGER NOT NULL,
    forma_farmaceutica_id INTEGER NOT NULL,
    ubicacion_id INTEGER NOT NULL,
    concentracion_id INTEGER NOT NULL,
    via_administracion_id INTEGER NOT NULL,
    FOREIGN KEY (laboratorio_id) REFERENCES Laboratorio(id_laboratorio),
    FOREIGN KEY (forma_farmaceutica_id) REFERENCES Forma_Farmaceutica(id_forma_farmaceutica),
    FOREIGN KEY (ubicacion_id) REFERENCES Ubicacion(id_ubicacion),
    FOREIGN KEY (concentracion_id) REFERENCES Concentracion(id_concentracion),
    FOREIGN KEY (via_administracion_id) REFERENCES Via_Administracion(id_via_administracion)
);

-- Creación de la tabla "Venta"
CREATE TABLE Ventas (
    id_ventas SERIAL PRIMARY KEY,
    cliente_id INTEGER,
    fecha_venta DATE NOT NULL,
    hora_venta TIME NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id_clientes)
);

-- Creación de la tabla "Venta_Medicamento"
CREATE TABLE Venta_Medicamento (
    id_venta_medicamento SERIAL PRIMARY KEY,
    venta_id INTEGER,
    medicamento_id INTEGER,
    cantidad INTEGER NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES Ventas(id_ventas),
    FOREIGN KEY (medicamento_id) REFERENCES Medicamentos(id_medicamentos)
);

-- Creación de la tabla "Compra"
CREATE TABLE Compra (
    id_compra SERIAL PRIMARY KEY,
    proveedor_id INTEGER,
    fecha_compra DATE NOT NULL,
    hora_compra TIME NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedor(id_proveedor)
);

-- Creación de la tabla "Compra_Medicamento"
CREATE TABLE Compra_Medicamento (
    id_compra_medicamento SERIAL PRIMARY KEY,
    compra_id INTEGER,
    medicamento_id INTEGER,
    cantidad INTEGER NOT NULL,
    precio_unitario NUMERIC(10, 2),
    fecha_vencimiento DATE NOT NULL,
    FOREIGN KEY (compra_id) REFERENCES Compra(id_compra),
    FOREIGN KEY (medicamento_id) REFERENCES Medicamentos(id_medicamentos)
);

-- Tabla para llevar el registro del kardex de los medicamentos
CREATE TABLE kardex (
    id_kardex SERIAL PRIMARY KEY,
    compra_medicamento_id INTEGER,
    venta_medicamento_id INTEGER,
    entrada INTEGER NOT NULL,
    salida INTEGER NOT NULL,
    stock_actual INTEGER NOT NULL,
    pedido_realizar VARCHAR(100),
    FOREIGN KEY (compra_medicamento_id) REFERENCES Compra_Medicamento(id_compra_medicamento),
    FOREIGN KEY (venta_medicamento_id) REFERENCES Venta_Medicamento(id_venta_medicamento)
);