// -----------------------------------------------------
// 1. Cargar variables de entorno
// -----------------------------------------------------
import dotenv from "dotenv";
dotenv.config();

// -----------------------------------------------------
// 2. Construcción de la BASE_URL
// -----------------------------------------------------
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;

const BASE_URL = `${API_BASE_URL}:${PORT}/courses`;

console.log("======================================");
console.log("      CRUD HTTP MANUAL - cURL");
console.log("======================================\n");

// -----------------------------------------------------
// 3. Funciones CRUD
// -----------------------------------------------------

/**
 * CREATE Course
 * @param {Object} courseData - Datos del curso a crear
 */
export function createCourse(courseData) {
  console.log("📌 CREATE Course (POST):");
  const curlCmd = `
curl -i -X POST ${BASE_URL} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(courseData)}'
`;
  console.log(curlCmd);
}

/**
 * READ All Courses
 */
export function readAllCourses() {
  console.log("📌 READ All Courses (GET):");
  console.log(`curl -i -X GET ${BASE_URL}\n`);
}

/**
 * READ Course by ID
 * @param {number} id - ID del curso
 */
export function readCourseById(id) {
  console.log("📌 READ Course by ID (GET):");
  console.log(`curl -i -X GET ${BASE_URL}/${id}\n`);
}

/**
 * UPDATE Course (PUT)
 * @param {number} id - ID del curso
 * @param {Object} data - Datos completos reemplazados
 */
export function updateCourse(id, data) {
  console.log("📌 UPDATE Course (PUT):");
  const curlCmd = `
curl -i -X PUT ${BASE_URL}/${id} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(data)}'
`;
  console.log(curlCmd);
}

/**
 * PATCH Course
 * @param {number} id - ID del curso
 * @param {Object} partial - Datos modificados
 */
export function patchCourse(id, partial) {
  console.log("📌 PATCH Course (PATCH):");
  const curlCmd = `
curl -i -X PATCH ${BASE_URL}/${id} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(partial)}'
`;
  console.log(curlCmd);
}

/**
 * DELETE Course
 * @param {number} id - ID del curso
 */
export function deleteCourse(id) {
  console.log("📌 DELETE Course (DELETE):");
  console.log(`curl -i -X DELETE ${BASE_URL}/${id}\n`);
}

// -----------------------------------------------------
// 4. Ejecución de todas las funciones
// -----------------------------------------------------
console.log("========== GENERANDO COMANDOS CRUD ==========\n");

createCourse({
  title: "Introducción a Node.js",
  description: "Curso básico para aprender Node",
  duration: "10h",
  status: "active"
});

readAllCourses();
readCourseById(3);

updateCourse(2, {
  title: "JavaScript Avanzado",
  description: "Conceptos avanzados y buenas prácticas",
  duration: "15h",
  status: "active"
});

patchCourse(5, { status: "archived" });

deleteCourse(7);

console.log("\n========== FIN DEL SCRIPT CRUD ==========\n");
