# APIStimulus

![Ruby on Rails](https://img.shields.io/badge/Ruby%20on%20Rails-v7.0.4-red)
![SQLite](https://img.shields.io/badge/SQLite-v3-blue)
![Stimulus](https://img.shields.io/badge/Stimulus-v2.0-orange)

## Descrição

APIStimulus é uma API desenvolvida em Ruby on Rails projetada para ser consumida por um projeto de Single Page Application (SPA) utilizando o Stimulus. O objetivo deste projeto é fornecer uma base sólida e escalável para a comunicação backend/frontend em aplicações modernas.

A API foi construída com a simplicidade e a robustez do Ruby on Rails, usando o banco de dados SQLite como solução para armazenamento local de dados durante o desenvolvimento.

## Tecnologias Utilizadas

- **Ruby on Rails**: Framework web completo, otimizado para a criação de APIs e aplicações escaláveis.
- **SQLite**: Banco de dados relacional leve, utilizado para desenvolvimento e testes.
- **Stimulus**: Um framework frontend simples para adicionar interatividade ao seu HTML.

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/APIStimulus.git
    cd APIStimulus
    ```

2. Instale as dependências:
    ```bash
    bundle install
    ```

3. Execute as migrações do banco de dados:
    ```bash
    rails db:migrate
    ```

4. Inicie o servidor:
    ```bash
    rails server
    ```

Agora a API estará disponível em `http://localhost:3000` e pronta para ser consumida pelo seu projeto SPA com Stimulus.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.
