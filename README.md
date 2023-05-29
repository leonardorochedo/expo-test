# MyApp 💭

Um lugar onde você pode postar seus pensamentos e dicas sobre qualquer coisa, minha primeira aplicação feita em React Native com Node.js!

<div align="center">
  <img src="https://github.com/leonardorochedo/myapp/assets/62243365/a202561c-fd51-41e2-ad10-781cc67dad82" />
</div>

## Projeto

Foi bem bacana desenvolver esta aplicação mobile, utilizando todos os recursos que estão listados logo abaixo, passei por algumas complicações por ser o meu primeiro projeto em React Native porém gostei muito do resultado e de suas funcionalidades!

## Bibliotecas

Utilizei as seguintes bibliotecas:

### Frontend

1. **axios** para consumir a API.
2. **react-navigation** para conseguir manipular e estruturar todas as rotas do projeto.
3. **react-native-async-storage** para armazenar o token de cada usuário localmente em seu dispositivo.
4. **react-hook-form** para utilizar hook's de formulários.
5. **react-native-flash-message** para disparar pop up's.

### Backend

1. **express** criar a API e gerenciar rotas, middleware e solicitações HTTP de forma eficiente.
2. **cors** permitir ou restringir o acesso a recursos em um servidor web de diferentes origens.
3. **jsonwebtoken** permite autenticação segura e confiável, fornecendo uma maneira de transmitir informações entre partes de forma criptografada e autenticada.
4. **mysql2** driver MySQL para Node.js que permite conectar e interagir com bancos de dados MySQL.
5. **sequelize**  ORM que simplifica o acesso e manipulação de bancos de dados relacionais (MySQL).
6. **bcrypt** criptografia de senhas, oferece funções de hash seguras para proteger senhas de usuários.
7. **nodemon** reinicia o servidor automaticamente após alguma alteração.

## Rode em sua máquina

Para executar este projeto localmente, siga as etapas abaixo:

Certifique-se de ter o Node.js e o banco de dados MySQL instalado em seu sistema. Você pode fazer o download e instalá-lo a partir do site oficial do Node.js e do MySQL.

1. Clone este repositório em sua máquina local usando o seguinte comando:
```
git clone https://github.com/leonardorochedo/myapp.git
```
2. Acesse o diretório do projeto:
```
cd myapp
```
3. Instale as dependências dentro do diretório frontend e backend:
```
cd frontend
npm install

cd backend
npm install
```
4. Inicie o projeto em sua máquina dentro de cada diretório:
```
npm start
```

Após os passos acima o projeto vai rodar na URL *http://localhost:19006* ou em seu próprio dispositivo pelo QR Code da Expo.
