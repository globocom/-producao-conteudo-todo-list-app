# Projeto Prático para Candidatos a Vagas de Front-end Júnior

## Bem-vindo(a)!

Este repositório contém um projeto de Lista de Tarefas (Todo List) projetado para ser utilizado em entrevistas técnicas para candidatos a posições junior de desenvolvimento front-end com foco em React. O objetivo deste teste é avaliar as habilidades práticas do candidato em resolver problemas de codificação em um ambiente colaborativo de pair programming.

---

## Objetivos do Teste

Durante a entrevista (cerca de 50 minutos), você será solicitado(a) a trabalhar em diversas tarefas relacionadas ao código fornecido. A interação é fundamental, e o entrevistador estará presente para guiá-lo(a) pelo processo, oferecendo ajuda conforme necessário.

---

## Requisitos

- **Node.js 18+**  
  Necessário para executar o projeto. Disponível em [https://nodejs.org/](https://nodejs.org/).
- **Visual Studio Code (VS Code)**  
  Recomendado como editor de código. Disponível em [https://code.visualstudio.com/](https://code.visualstudio.com/).
- **Gerenciador de Pacotes**  
  Pode ser Yarn, PNPM ou NPM. Escolha o que preferir para instalar as dependências do projeto.

---

## Setup do Projeto

Antes da entrevista, configure o ambiente de desenvolvimento em sua máquina:

```
git clone git@github.com:globocom/todo-list-app.git
cd todo-list-app
yarn install
```

Para executar o projeto em modo web (via Expo for Web):

---

## Tarefas Principais

1. **Domínio de GIT**  
   - Clonar o repositório e instalar as dependências necessárias.

2. **Estado Local (useState)**  
   - Criar um estado local para armazenar a lista de tarefas.

3. **Adicionar Tarefa**  
   - Implementar funcionalidade para adicionar uma nova tarefa.

4. **Validação de Tarefa**  
   - Não permitir adicionar uma tarefa vazia ou contendo apenas espaços.

5. **Alternar Estado de Conclusão**  
   - Marcar uma tarefa como concluída ou pendente.

6. **Deletar Tarefa**  
   - Permitir que o usuário delete uma tarefa da lista.

7. **Desabilitar Botão**  
   - Desabilitar o botão "Adicionar" quando não houver valor no campo de input.

---

## Persistência de Tarefas (Local Storage)

Esta aplicação carrega e salva a lista de tarefas no **Local Storage** do navegador, garantindo que as tarefas persistam mesmo após recarregar a página.

- **Carregar**  
  - Quando a aplicação inicia, o hook de tarefas (useTask) lê as tarefas salvas no Local Storage.
- **Salvar**  
  - Sempre que o estado de tarefas (tasks) é atualizado, o hook salva a nova lista no Local Storage.

---

## Uso de Context

Para compartilhar a lista de tarefas e funções de manipulação (adicionar, alternar, deletar) entre diferentes componentes, foi criado um **Context** (`TaskProvider`). Dessa forma:

- **TaskProvider** envolve a aplicação, provendo `tasks`, `addTask`, `toggleTask` e `deleteTask`.
- **useTasksContext** acessa o contexto, retornando o estado atual e as funções de CRUD.

---

## Testes Automatizados

Este projeto conta com testes que validam as principais funcionalidades:

- `addTask`
- `toggleTask`
- `deleteTask`
- `Local Storage` (carregar e salvar)
- `Context` (distribuição de estado)

Para executar os testes:

```
yarn test
```

Leia atentamente as mensagens de erro, pois elas podem indicar problemas de configuração de ambiente (por exemplo, ausência de mocks para `localStorage`).

---

## Ferramentas e Tecnologias

- **React**  
- **Expo**  
- **React Native Web**  
- **Git**  
- **TypeScript** (opcional/fortemente recomendado)

---

## Dicas

- **Leia atentamente cada tarefa e cada mensagem de erro**.  
- **Faça perguntas** sempre que algo não estiver claro.  
- Use a **documentação oficial** das tecnologias envolvidas como referência.  
- O objetivo é avaliar **sua capacidade de resolver problemas**, **suas habilidades de comunicação** e **colaboração** (pair programming).

Boa sorte! Estamos ansiosos para ver suas habilidades em ação.
