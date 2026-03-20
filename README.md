# 🐻 Escandalosos — REST CRUD API

## 📌 Descripción

Se desarrolló una API REST con operaciones CRUD completas para la gestión de personajes del dominio **Escandalosos (We Bare Bears)**.

El sistema permite administrar información de personajes como nombre, tipo, descripción, nivel y disponibilidad. La API está diseñada para ser consumida por un frontend web ya integrado.

El proyecto cumple con una arquitectura cliente-servidor, utilizando contenedores Docker para garantizar su correcta ejecución en cualquier entorno.

---

## ⚙️ Tecnologías utilizadas

- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL
- **Frontend:** HTML, CSS, JavaScript
- **Contenedores:** Docker + Docker Compose

---

## 🧠 Estructura del recurso

El sistema maneja el recurso `escandalosos` con la siguiente estructura:

| Campo  | Tipo    | Descripción                  |
|--------|--------|------------------------------|
| id     | integer | Identificador único          |
| campo1 | string  | Nombre del personaje         |
| campo2 | string  | Tipo (oso, humano, etc.)     |
| campo3 | string  | Descripción                  |
| campo4 | integer | Nivel o fuerza               |
| campo5 | float   | Calificación                 |
| campo6 | boolean | Disponible                   |

---

## 🌐 Endpoints

Base URL:


http://localhost:8080/escandalosos


| Método | Endpoint              | Descripción                |
|--------|----------------------|----------------------------|
| GET    | /escandalosos        | Obtener todos              |
| GET    | /escandalosos/:id    | Obtener uno                |
| POST   | /escandalosos        | Crear nuevo                |
| PUT    | /escandalosos/:id    | Actualizar completo        |
| DELETE | /escandalosos/:id    | Eliminar                   |

---

## ✅ Validaciones

- Todos los campos son obligatorios
- Tipos estrictos:
  - campo4 → entero
  - campo5 → decimal
  - campo6 → booleano
- Respuestas en formato JSON
- Manejo correcto de códigos HTTP

---

## 🐳 Ejecución del proyecto

### 🔥 Levantar todo el sistema

```bash
docker-compose up --build
🌍 Accesos

Frontend: http://localhost:3000

Backend API: http://localhost:8080/escandalosos

⚙️ Configuración del frontend

Archivo:

frontend/public/js/config.js
window.API_URL = "http://localhost:8080";
window.RESOURCE = "escandalosos";
🏗️ Arquitectura
Frontend (HTML/JS)
        ↓
Backend (Express API)
        ↓
Base de datos (PostgreSQL)
🧪 Funcionalidades implementadas

✔ Crear personaje
✔ Listar personajes
✔ Ver detalle
✔ Editar personaje
✔ Eliminar personaje

🧩 Bonus implementados
✅ Integración Full Stack (+10 pts)

Un solo docker-compose.yml

Frontend y backend levantan juntos

Sin configuración manual adicional

✅ Personalización del Frontend (+5 pts)

Se reemplazaron nombres genéricos (campo1, campo2, etc.)

Interfaz adaptada al dominio “Escandalosos”

Mejor experiencia visual y comprensión del usuario