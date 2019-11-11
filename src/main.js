class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');

    this.reisterHandlers();
  }

  // registrar os eventos
  reisterHandlers() {
    // ouvir os elementos
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault(); // anula comportamento padrão do form
    // Colocando informações de forma estática, depois vai vir da api do git
    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire sua ideia do papel e dê vida a sua startup',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'https://github.com/Rocketseat/unform',
    });
  }
}

