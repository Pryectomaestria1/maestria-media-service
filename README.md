# Maestria - Media Service 🎥

Microservicio encargado de la gestión y subida de archivos multimedia (videos de lecciones y portadas de cursos) a MinIO (compatible con AWS S3).

## 🚀 Requisitos e Instalación

### 1. Contratos gRPC (Obligatorio)
Clona el repositorio de contratos en el **mismo directorio padre** donde está este microservicio con el nombre `grpc-contracts`:

```bash
# Desde el directorio padre común:
git clone https://github.com/Pryectomaestria1/maestria-grpc-contracts.git grpc-contracts
```

La estructura de carpetas debe quedar así:
```
directorio-padre/
├── maestria-media-service/  (Este repositorio)
└── grpc-contracts/
```

### 2. Configuración (MinIO)
Este servicio **no usa base de datos relacional**; almacena archivos en MinIO (S3). Copia las variables de entorno:

```bash
cp .env.example .env
```

### 3. Ejecución del Servicio
Instala las dependencias y corre el servidor en modo desarrollo (corre en el puerto gRPC `50053`):

```bash
npm install
npm run start:dev
```
