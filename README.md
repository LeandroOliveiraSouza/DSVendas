# DSMovie
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroOliveiraSouza/DSMovie/blob/main/LICENSE) 

# Sobre o projeto
https://dsmovie-los.netlify.app

DSMovie é uma aplicação full stack web, com leiaute responsivo, usando os breakpoints do bootstrap. Construída durante a semana Spring React, organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Seu objetivo é permitir avaliar filmes que estão disponíveis em uma listagem. Selecionando uma das opções, o usuário é direcionado para um formulário que viabiliza informações para que a avaliação seja realizada. Essa avaliação é incluída no banco de dados, que retroalimenta os componentes de avaliações do front end.

## Layout web
![Web product Listing](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsmovie-listing.png)![Web Product Form](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsmovie-form.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroOliveiraSouza/assets/blob/main/modelo-dominio.png)

## Padrão camadas no backend
![Avaliacoes](https://github.com/LeandroOliveiraSouza/assets/blob/main/backend-camadas.png)

## Esquema para salvar avaliações
![Avaliacoes](https://github.com/LeandroOliveiraSouza/assets/blob/main/salvar-avaliacao.png)

# Competências:
## Back end:
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
- Criar endpoints da API REST
- Implantação na nuvem

## Front end:
- Detalhamento e construção de cards;
- Formulários
- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
  - useParams
  - useNavigate
- Implantação na nuvem

# Tecnologias utilizadas
## Back end
- Java
- Spring Data JPA
- Spring Web
- Spring Security
- Banco de dados H2
- Maven
## Front end
- HTML / CSS / JavaScript / TypeScript
- Bootstrap (5.1.3)
- ReactTS (React-App)
- React Router
- AXIOS

## Implantação em produção
- Back end: localhost
- Front end: localhost
- Banco de dados: H2 e Postgres (Docker Compose)

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: yarn / react

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/frontend

# instalar dependências
yarn

# executar o projeto
yarn start
```

# Agradecimentos
- DevSuperior https://devsuperior.com.br/

# Autor
Leandro de Oliveira Souza

