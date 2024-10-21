# SPAStimulus

![Stimulus](https://img.shields.io/badge/Stimulus-v2.0-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.0-blue)
![Ruby on Rails](https://img.shields.io/badge/Ruby%20on%20Rails-v7.0.4-red)

## Descrição

SPAStimulus é um projeto Single Page Application (SPA) desenvolvido em Ruby on Rails, utilizando o Stimulus para interatividade e TailwindCSS para estilização. O objetivo deste projeto é criar uma interface rápida e dinâmica que consome a API fornecida pelo projeto [APIStimulus](https://github.com/PedroLLOliveira/apiStimulus).

O Stimulus foi usado para adicionar comportamento reativo ao frontend, mantendo a simplicidade no código JavaScript. TailwindCSS foi escolhido para a estilização, permitindo um design moderno e altamente customizável.

## Tecnologias Utilizadas

- **Stimulus**: Framework frontend para manipulação de eventos e DOM com simplicidade.
- **TailwindCSS**: Framework de utilitários CSS para criar layouts customizados e responsivos.
- **Ruby on Rails**: Usado para fornecer a estrutura backend, facilitando a integração entre a API e o frontend.

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/SPAStimulus.git
    cd SPAStimulus
    ```

2. Instale as dependências:
    ```bash
    bundle install
    yarn install
    ```

3. Compile os assets (TailwindCSS e outros):
    ```bash
    rails assets:precompile
    ```

4. Execute as migrações do banco de dados:
    ```bash
    rails db:migrate
    ```

5. Inicie o servidor:
    ```bash
    rails server
    ```

Agora a aplicação estará disponível em `http://localhost:3000` e pronta para ser utilizada com a API.

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request com suas melhorias.

