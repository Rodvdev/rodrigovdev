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
            <ul>
              <li><strong>Configurar nombre y correo:</strong> <code>git config --global user.name "TuNombre"</code> <code>git config --global user.email "TuCorreo"</code></li>
              <li><strong>Clonar un repositorio:</strong> <code>git clone https://github.com/usuario/repositorio.git</code></li>
              <li><strong>Hacer commit y push:</strong> <code>git commit -m "Descripción de los cambios"</code> <code>git push origin nombre-de-la-rama</code></li>
            </ul>
            <p>Visita: <a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">Documentación de GitHub</a></p>
          </div>
        ),
      },
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
