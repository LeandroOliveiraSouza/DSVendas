# DSVendas
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroOliveiraSouza/DSVendas/blob/main/LICENSE) 

# Sobre o projeto
DSVendas é uma aplicação full stack web, com leiaute responsivo, usando os breakpoints do bootstrap. Construída durante a semana Spring React, organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Seu objetivo é demonstrar duas visões, gráfica e por tabela, sobre um conjunto de informações sobre os vendedores. A tabela é formada por 20 linhas com dados diversos, disponíveis no banco H2 e Postgres, enquanto que os dois gráficos retornam informações sobre regras definidas no código-fonte. A taxa de sucesso ou efetividade (gráfico de barras) dos vendedores, compara os clientes visitados com aqueles que fecharam o contrato/venda. Já a Participação nas vendas (gráfico de rosca) leva em consideração a participação de cada vendedor em relação ao total de vendas. Os dados dos gráficos sendo estáticos, não acompanham a paginação da tabela, mas a tabela altera as informações a cada interação. 

## Layout web
![Web Dashboard](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsvendas-dashboard.png)![Web Tabela](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsvendas-tabela-rodape.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroOliveiraSouza/assets/blob/main/modelo-dominio-dsvendas.png)

## Padrão camadas no backend
![Avaliacoes](https://github.com/LeandroOliveiraSouza/assets/blob/main/backend-camadas.png)

# Competências:
## Back end:
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
  - repositories
    - Buscas agrupadas (GROUP BY)
      - Total de vendas por vendedor
      - Taxa de sucesso por vendedor
  - DTO's
  - service
  - controller
    - endpoints da API REST
- Consulta paginada de vendas
  - Pageable
  - page, size, sort 
- Consultas agrupadas para gráficos
- Perfis de projeto: test, dev, prod


## Front end:
- Detalhamento e construção de cards;
- Três pilares do React
  - Componentes
  - Props
  - Estado

## Integrar back end e front end
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios
  - Apex Charts
  - Date-fns

# Tecnologias utilizadas
## Back end
- Java
- Spring Data JPA
- Spring Web
- Spring Security
- Banco de dados H2
- Banco de dados Postgres (Docker Compose)
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
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/backend
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

