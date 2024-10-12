import React, { useState } from 'react';
import './Guide.css';

const topics = [
    {
      title: "Linux",
      content: (
        <div>
          <h3>Comandos Básicos:</h3>
          <ul>
            <li><strong>Navegar entre directorios:</strong> <code>cd /ruta/del/directorio</code></li>
            <li><strong>Listar archivos:</strong> <code>ls</code></li>
            <li><strong>Crear archivos:</strong> <code>touch nombre-archivo.txt</code></li>
            <li><strong>Crear directorios:</strong> <code>mkdir nombre-directorio</code></li>
            <li><strong>Ver contenido de un archivo:</strong> <code>cat archivo.txt</code></li>
            <li><strong>Eliminar archivos:</strong> <code>rm archivo.txt</code></li>
          </ul>
  
          <h3>Gestión de Archivos y Directorios:</h3>
          <ul>
            <li><strong>Copiar archivos:</strong> <code>cp archivo.txt /destino/</code></li>
            <li><strong>Eliminar directorios:</strong> <code>rm -r carpeta</code></li>
            <li><strong>Renombrar/mover archivos:</strong> <code>mv archivo.txt nuevo_nombre.txt</code></li>
          </ul>
  
          <h3>Atajos de Teclado Útiles en Linux:</h3>
          <ul>
            <li><strong>Abrir una nueva terminal:</strong> <code>Ctrl + Alt + T</code></li>
            <li><strong>Limpiar la terminal:</strong> <code>Ctrl + L</code></li>
            <li><strong>Copiar y pegar en la terminal:</strong> <code>Ctrl + Shift + C</code> y <code>Ctrl + Shift + V</code></li>
          </ul>
  
          <h3>Combinaciones de Teclas para Visual Studio Code en Linux:</h3>
          <h4>Navegación Básica:</h4>
          <ul>
            <li><strong>Abrir paleta de comandos:</strong> <code>Ctrl + Shift + P</code></li>
            <li><strong>Buscar en el archivo:</strong> <code>Ctrl + F</code></li>
          </ul>
        </div>
      ),
    },
    
    {
        title: "Git y GitHub",
        content: (
          <div>
            <h3>Pasos para trabajar con GitHub en Visual Studio Code:</h3>
      
            <h4>1. Configurar nombre y correo:</h4>
            <ul>
              <li><strong>Configurar nombre:</strong> <code>git config --global user.name "TuNombre"</code></li>
              <li><strong>Configurar correo:</strong> <code>git config --global user.email "TuCorreo"</code></li>
              <li>Estos comandos configuran tu identidad en Git, y aparecerán en tus commits.</li>
            </ul>
      
            <h4>2. Clonar un repositorio:</h4>
            <ul>
              <li><strong>Clonar un repositorio:</strong> <code>git clone https://github.com/usuario/repositorio.git</code></li>
              <li>Esto descarga una copia del repositorio desde GitHub a tu máquina local.</li>
            </ul>
      
            <h4>3. Hacer cambios, commit y push:</h4>
            <ul>
              <li><strong>Añadir archivos:</strong> <code>git add .</code> (Agrega todos los cambios)</li>
              <li><strong>Hacer commit:</strong> <code>git commit -m "Descripción de los cambios"</code></li>
              <li><strong>Subir los cambios (push):</strong> <code>git push origin nombre-de-la-rama</code></li>
            </ul>
      
            <h4>4. Cerrar sesión en GitHub:</h4>
            <ul>
              <li><strong>Eliminar las credenciales almacenadas:</strong></li>
              <ul>
                <li>**Windows**: Usa el "Administrador de Credenciales" para eliminar las credenciales de GitHub.</li>
                <li>**Mac/Linux**: Usa el comando: <code>git credential-cache exit</code> o elimina el archivo <code>~/.git-credentials</code>.</li>
              </ul>
              <li>Esto te permitirá iniciar sesión con una nueva cuenta la próxima vez que hagas un <code>push</code>.</li>
            </ul>
      
            <h4>5. Cambiar de usuario en GitHub:</h4>
            <ul>
              <li><strong>Configurar nuevo nombre y correo:</strong></li>
              <ul>
                <li><code>git config --global user.name "NuevoNombre"</code></li>
                <li><code>git config --global user.email "NuevoCorreo"</code></li>
              </ul>
              <li><strong>Eliminar credenciales almacenadas:</strong> Si necesitas iniciar sesión con un nuevo usuario, elimina las credenciales anteriores siguiendo los pasos de cerrar sesión.</li>
            </ul>
      
            <h4>6. Crear una nueva rama:</h4>
            <ul>
              <li><strong>Crear una rama:</strong> <code>git checkout -b nombre-de-la-rama</code></li>
              <li>Esto crea una nueva rama y te cambia a esa rama para empezar a trabajar en ella.</li>
            </ul>
      
            <h4>7. Cambiar entre ramas:</h4>
            <ul>
              <li><strong>Cambiar a una rama existente:</strong> <code>git checkout nombre-de-la-rama</code></li>
            </ul>
      
            <h4>8. Acceder a un repositorio remoto existente:</h4>
            <ul>
              <li><strong>Listar repositorios remotos:</strong> <code>git remote -v</code></li>
              <li><strong>Agregar un repositorio remoto:</strong> <code>git remote add origin https://github.com/usuario/repositorio.git</code></li>
            </ul>
      
            <h4>9. Recuperar cambios de la rama remota (pull):</h4>
            <ul>
              <li><strong>Actualizar tu copia local con los últimos cambios del remoto:</strong> <code>git pull origin nombre-de-la-rama</code></li>
              <li>Esto descarga y fusiona los cambios más recientes de la rama remota a tu copia local.</li>
            </ul>
      
            <h4>10. Ver el historial de commits:</h4>
            <ul>
              <li><strong>Ver el historial de commits:</strong> <code>git log</code></li>
              <li>Este comando muestra los commits realizados en la rama actual.</li>
            </ul>
      
            <p>Visita: <a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">Documentación de GitHub</a></p>
          </div>
        ),
      }
,      
      {
        title: "Vercel",
        content: (
          <div>
            <h3>Desplegar una aplicación:</h3>
            <ul>
              <li><strong>Instalar Vercel CLI:</strong> <code>npm install -g vercel</code></li>
              <li><strong>Iniciar sesión:</strong> <code>vercel login</code></li>
              <li><strong>Desplegar la app (Producción):</strong> <code>vercel --prod</code></li>
              <li><strong>Desplegar en modo desarrollo:</strong> <code>vercel dev</code></li>
            </ul>
      
            <h3>Configurar Variables de Entorno:</h3>
            <ul>
              <li><strong>Agregar variable de entorno:</strong> <code>vercel env add [development|preview|production]</code></li>
              <li><strong>Ver variables de entorno:</strong> <code>vercel env ls</code></li>
              <li><strong>Eliminar variable de entorno:</strong> <code>vercel env rm</code></li>
            </ul>
      
            <h3>Desplegar en diferentes entornos:</h3>
            <ul>
              <li><strong>Desplegar en Preview (entorno de pruebas):</strong> <code>vercel --pre</code></li>
              <li><strong>Desplegar en Producción:</strong> <code>vercel --prod</code></li>
            </ul>
      
            <h3>Enlaces personalizados y dominios:</h3>
            <ul>
              <li><strong>Añadir un dominio:</strong> <code>vercel domains add dominio.com</code></li>
              <li><strong>Ver dominios actuales:</strong> <code>vercel domains ls</code></li>
              <li><strong>Eliminar un dominio:</strong> <code>vercel domains rm dominio.com</code></li>
            </ul>
      
            <h3>Otros comandos útiles:</h3>
            <ul>
              <li><strong>Cancelar despliegue:</strong> <code>vercel cancel [deploymentId]</code></li>
              <li><strong>Mostrar el historial de despliegues:</strong> <code>vercel ls</code></li>
              <li><strong>Eliminar un despliegue:</strong> <code>vercel remove [deploymentId]</code></li>
            </ul>
      
            <p>Visita: <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">Documentación de Vercel</a></p>
          </div>
        ),
      },
      
    {
      title: "ApolloGraphQL",
      content: (
        <div>
          <h3>Instalación y Configuración:</h3>
          <ul>
            <li><strong>Instalar Apollo Client:</strong> <code>npm install @apollo/client graphql</code></li>
            <li><strong>Configurar ApolloProvider:</strong> Envolver tu aplicación con <code>&lt;ApolloProvider&gt;</code></li>
          </ul>
          <p>Visita: <a href="https://www.apollographql.com/docs/" target="_blank" rel="noopener noreferrer">Documentación de Apollo GraphQL</a></p>
        </div>
      ),
    },
    {
      title: "Prisma",
      content: (
        <div>
          <h3>Instalación y Configuración:</h3>
          <ul>
            <li><strong>Instalar Prisma CLI:</strong> <code>npm install prisma --save-dev</code></li>
            <li><strong>Generar esquema:</strong> <code>npx prisma init</code></li>
          </ul>
          <p>Visita: <a href="https://www.prisma.io/docs/" target="_blank" rel="noopener noreferrer">Documentación de Prisma</a></p>
        </div>
      ),
    },
    {
      title: "Remix.run",
      content: (
        <div>
          <h3>Instalación y Configuración:</h3>
          <ul>
            <li><strong>Instalar Remix:</strong> <code>npx create-remix@latest</code></li>
            <li><strong>Configuración:</strong> Seguir los pasos de <code>create-remix</code> para configurar tu aplicación.</li>
          </ul>
          <p>Visita: <a href="https://remix.run/docs" target="_blank" rel="noopener noreferrer">Documentación de Remix.run</a></p>
        </div>
      ),
    },
    {
      title: "ShadCN UI Components",
      content: (
        <div>
          <h3>Instalación y Uso:</h3>
          <ul>
            <li><strong>Instalar ShadCN UI:</strong> <code>npm install @shadcn/ui</code></li>
            <li><strong>Usar componentes:</strong> Importar componentes en tu aplicación React.</li>
          </ul>
          <p>Visita: <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">Documentación de ShadCN</a></p>
        </div>
      ),
    },
    {
      title: "Playwright",
      content: (
        <div>
          <h3>Instalación y Configuración:</h3>
          <ul>
            <li><strong>Instalar Playwright:</strong> <code>npm install playwright</code></li>
            <li><strong>Ejecutar pruebas:</strong> <code>npx playwright test</code></li>
          </ul>
          <p>Visita: <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">Documentación de Playwright</a></p>
        </div>
      ),
    },
    {
      title: "ClickUp (Organization)",
      content: (
        <div>
          <h3>Organización de Tareas:</h3>
          <ul>
            <li><strong>Crear proyectos:</strong> Usa <code>Spaces</code> y <code>Lists</code> para organizar proyectos.</li>
            <li><strong>Asignar tareas:</strong> Asigna tareas a miembros del equipo con fechas de vencimiento.</li>
          </ul>
          <p>Visita: <a href="https://docs.clickup.com/" target="_blank" rel="noopener noreferrer">Documentación de ClickUp</a></p>
        </div>
      ),
    },
  ];
  

const Guide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Función para alternar el contenido expandido de cada sección
  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="guide">
      <h1>Guía de Desarrollo</h1>
      {topics.map((topic, index) => (
        <div key={index} className="topic">
          <h2 onClick={() => toggleContent(index)}>
            {topic.title}
            <span className={`icon ${activeIndex === index ? 'expanded' : ''}`}>▼</span>
          </h2>
          {activeIndex === index && (
            <div className="content">
              {topic.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Guide;
