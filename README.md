<h1 align="center">
  <img width='140px'src="https://user-images.githubusercontent.com/80167149/152594361-5dece93e-2f26-48de-b089-f2f8aa987ca7.png" align="center"/>
</h1>

## 💻 Projeto
Marvel-app é um projeto para listagem e visualização de informações como (Character, Comics, Events e Series). Todos os dados utilizado nesse app foram possíveis com o uso da [Marvel Comics API](https://developer.marvel.com/)

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://reactjs.org) <img align='left' alt='React' width='35px' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"/>

- [Next.js](https://nextjs.org/) <img align='left' alt='Next' width='31px' src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"/>

- [TypeScript](https://www.typescriptlang.org/) <img align='left' alt='TypeScript' width='35px' src="https://img.icons8.com/color/48/000000/typescript.png"/>

- [Styled-Components](https://styled-components.com/) <img align='left' alt="styled-components" width='35px' src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" />

---

## 📂 Estrutura

- `pages/` -> Pasta de rotas do app.
- `public/` -> Pasta de Imagens.
- `src/` 
- `src/components` -> Pasta de todos componentes do app.
- `src/Features` -> Pasta de todas Features do app.
- `src/Features/PageItem` -> Pasta de Features da Página do item selecionado.
- `src/Features/PageList` -> Pasta de Features da Página de listagem.

--

- `src/services/` -> Pasta de todas as chamadas na API da [Marvel](https://developer.marvel.com/).
- `src/services/api.ts` -> Arquivo que cria baseURL para API da [Marvel](https://developer.marvel.com/).
- `src/services/apiConstants.ts` -> Arquivo de todas constantes utilizada para fazer requisição API.
- `src/services/auth.ts` -> Arquivo que armazena constantes de autorização de requisição na API.
- `src/services/PageItem/` -> Pasta de todas as chamadas na API da Página do item selecionado.
- `src/services/PageList/` -> Pasta de todas as chamadas na API da Página de listagem.

---

https://user-images.githubusercontent.com/80167149/152596594-12ef9243-ad4f-4baf-8422-fc60c4d4f2e4.mp4

https://user-images.githubusercontent.com/80167149/152596711-71845718-c32a-42e6-b427-3e694f13c21b.mp4

---

### 🔗 Funcionalidades

- [x] **Listagem de itens contendo informações sobre (Character, Comics, Events e Series).**
- [x] **Ampliar a listagem de itens.**: Método para adicionar mais itens a lista.
- [x] **Buscar itens específicos.**: Método para filtrar item a partir do seu nome.
- [x] **Selecionar item específico:** Criar uma página na aplicação com mais detalhes sobre o item escolhido.
- [x] **Utilização de swiper**: lib [Swiper React](https://swiperjs.com/react) utilizada nessa funcionalidade.
- [x] **Utilização de Axios**: configuração do [Axios](https://axios-http.com/docs/intro) para consumo da API utilizando key da Marvel.

---
## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone https://github.com/ChristanDaniel/marvel-app.git
```
```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn dev

```
Tudo Pronto? Agora é só acessar [`localhost:3000`](http://localhost:3000) do seu navegador.


---
Feito com 🧡 by Christian Daniel 👋🏻



