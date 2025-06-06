function buscarRepos() {
    const lenguaje = document.getElementById('language').value;
    const resultado = document.getElementById('resultado');
  
    
    const repositorios = {
      javascript: [
        { nombre: 'Repositorio JS', url: 'https://github.com/usuario/js-repo' }
      ],
      python: [
        { nombre: 'Repositorio Python', url: 'https://github.com/usuario/python-repo' }
      ],
      java: [
        { nombre: 'Repositorio Java', url: 'https://github.com/usuario/java-repo' }
      ],
      cpp: [
        { nombre: 'Repositorio C++', url: 'https://github.com/usuario/cpp-repo' }
      ],
      php: [
        { nombre: 'Repositorio PHP', url: 'https://github.com/usuario/php-repo' }
      ],
      go: [
        { nombre: 'Repositorio Go', url: 'https://github.com/usuario/go-repo' }
      ]
    };
  
    
    resultado.innerHTML = '';
  
   
    if (repositorios[lenguaje]) {
      repositorios[lenguaje].forEach(repo => {
        const enlace = document.createElement('a');
        enlace.href = repo.url;
        enlace.textContent = repo.nombre;
        enlace.target = '_blank';
        resultado.appendChild(enlace);
      });
    } else {
      resultado.textContent = 'No se encontraron repositorios para este lenguaje.';
    }
  }
  