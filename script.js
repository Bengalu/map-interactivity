import { readFile } from 'fs';

// Lee el contenido del archivo JSON
readFile('datos.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Convierte el contenido JSON a un objeto JavaScript
  const jsonData = JSON.parse(data);

  // Ahora, puedes acceder a los datos como cualquier objeto JavaScript
  console.log(jsonData);
});