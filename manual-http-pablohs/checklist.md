# CHECKLIST – Semana 01

## Parte 1 – Configuración inicial
- [x] Crear el proyecto `manual-http-gregorio-lr`
- [x] Instalar dependencias (`json-server`, `dotenv`)
- [x] Configurar `package.json` (scripts + `"type": "module"`)
- [x] Crear estructura de carpetas
- [x] Crear archivos de configuración:
  - [x] `.env`
  - [x] `.env.example`
  - [x] `.gitignore`
- [x] Importar la base de datos (`db.json`)

## Parte 2 – Script CRUD con funciones JS
- [x] Crear archivo `crud-curl.js`
- [x] Crear funciones:
  - [x] `createStudent(studentData)`
  - [x] `readAllStudents()`
  - [x] `readStudentById(id)`
  - [x] `updateStudent(id, studentData)`
  - [x] `patchStudent(id, partialData)`
  - [x] `deleteStudent(id)`
- [x] Ejecutar script con `npm run crud:curl`

## Parte 3 – Documentación CRUD con cURL
- [x] Documentar operaciones CRUD en README:
  - [x] CREATE
  - [x] READ (todos)
  - [x] READ (por ID)
  - [x] UPDATE
  - [x] PATCH
  - [x] DELETE
- [x] Realizar pruebas:
  - [x] Levantar `json-server`
  - [x] Ejecutar comandos `curl`
  - [x] Capturar respuestas reales
  - [x] Documentar resultados en README

## Parte 4 – Thunder Client
- [x] Crear peticiones:
  - [x] POST – Crear estudiante
  - [x] GET – Todos los estudiantes
  - [x] GET – Estudiante por ID
  - [x] PUT – Actualizar estudiante completo
  - [x] PATCH – Actualizar un campo
  - [x] DELETE – Eliminar estudiante
- [x] Realizar capturas de todas las peticiones
- [x] Documentar funcionamiento en README:
  - [x] Explicar uso de Thunder Client
  - [x] Incluir capturas con descripción

## Parte 5 – REST Client
- [x] Crear archivo `peticiones-crud.http`
- [x] Incluir peticiones:
  - [x] CREATE – Agregar estudiante
  - [x] READ – Todos los estudiantes
  - [x] READ – Estudiante por ID
  - [x] READ – Filtrar estudiantes activos
  - [x] READ – Filtrar por nivel
  - [x] UPDATE – Modificar estudiante completo (PUT)
  - [x] PATCH – Modificar campo específico
  - [x] DELETE – Eliminar estudiante
- [x] Probar peticiones desde VSCode

## Parte 6 – Script de validación
- [x] Crear `validate.sh`
- [x] Comprobar existencia de archivos/carpetas
- [x] Verificar dependencias en `package.json`
- [x] Revisar scripts de ejecución
- [x] Comprobar capturas en `/images`
- [x] Dar permisos de ejecución
- [x] Probar validador con `npm run validate`

## Parte 7 – Checklist final
- [x] Crear y completar la checklist
- [x] Verificar que el proyecto cumple con la rúbrica
