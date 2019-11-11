import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');

    this.reisterHandlers();
  }

  // registrar os eventos
  reisterHandlers() {
    // ouvir os elementos
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault(); // anula comportamento padrão do form

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0)
      return;
    
    const response = await api.get(`/repos/${repoInput}`);
    
    console.log(response);

    // Colocando informações de forma estática, depois vai vir da api do git
    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire sua ideia do papel e dê vida a sua startup',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'https://github.com/Rocketseat/unform',
    });

    this.render();
  }

  render(){
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

    });
  }
}

new App();