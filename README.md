# Projeto My-Partners

Este projeto é um sistema de cadastro de parceiros e empresas externas desenvolvido com Next.js e React, utilizando tecnologias como Axios, Tailwind CSS, useContext e react-icons.

## Sobre o Projeto

O objetivo deste projeto é criar um sistema para cadastrar e gerenciar parceiros integrados em aplicações, além de informações sobre seu uso e os clientes atendidos. O sistema utiliza micro front-ends separados por domínios ou contextos de uso, permitindo que diferentes times cuidem das funcionalidades de forma independente.

## Funcionalidades da API

- Listar todos os parceiros
- Obter detalhes de um parceiro por ID
- Cadastrar um novo parceiro
- Atualizar informações de um parceiro existente
- Excluir um parceiro

## Tecnologias Utilizadas

- **Next.js**: Framework React utilizado para renderização do lado do servidor (SSR) e geração de páginas estáticas.
- **React.js**: Principal framework de frontend, oferecendo componentização e um modelo de desenvolvimento declarativo.
- **Tailwind CSS**: Framework de estilização utilizado para uma abordagem moderna e eficiente de estilização baseada em classes.
- **useContext**: Hook do React utilizado para gerenciamento de estado global e compartilhamento de dados entre componentes.
- **Axios**: Biblioteca para realizar requisições HTTP, utilizada para integração com as APIs de parceiros e empresas externas.
- **localStorage**: Utilizado para armazenar dados localmente no navegador, oferecendo uma solução simples de persistência de informações.
- **react-icons**: Biblioteca para utilizar ícones de forma simplificada e consistente no projeto.

## Executando o Projeto Localmente

fiquei a vontade para escolher entre npm pu yarn

### Instalação das Dependências

```bash
npm install
```

### Executando em Modo de Desenvolvimento

```bash
npm run dev
```

O servidor local será iniciado em http://localhost:3000.

### Build do Projeto

```bash
npm build
```

### Executando o Build em Produção

```bash
npm start
```

### Verificando o Estilo do Código (Lint)

```bash
npm run lint
```
