# MyApp 💭

Um lugar onde você pode postar seus pensamentos e dicas sobre qualquer coisa, minha primeira aplicação feita em React Native com Node.js!

<div align="center">
  <img src="https://github.com/leonardorochedo/myapp/assets/62243365/a202561c-fd51-41e2-ad10-781cc67dad82" />
</div>

## Projeto

Neste projeto, desenvolvi uma aplicação onde os usuários podem compartilhar pensamentos e dicas sobre diversos assuntos. Foi minha primeira experiência com React Native, o que trouxe desafios, mas também
oportunidades de aprendizado.

Utilizei recursos como react-navigation para navegação, react-native-async-storage para armazenamento local de tokens e bibliotecas como express e jsonwebtoken no backend para
autenticação segura e também claro o regex de validar e-mail como de costume. Estou empolgado com o resultado e espero continuar aprimorando minhas habilidades.

## Bibliotecas

Utilizei as seguintes bibliotecas:

### Frontend

• **Axios** para consumir a API.<br>
• **React Navigation** para conseguir manipular e estruturar todas as rotas do projeto.<br>
• **React Native Async Storage** para armazenar o token de cada usuário localmente em seu dispositivo.<br>
• **React Hook Form** para utilizar hook's de formulários.<br>
• **React Native Flash Message** para disparar pop up's.<br>

### Backend

• **Express** criar a API e gerenciar rotas, middleware e solicitações HTTP de forma eficiente.<br>
• **Cors** permitir ou restringir o acesso a recursos em um servidor web de diferentes origens.<br>
• **Json Web Token** permite autenticação segura e confiável, fornecendo uma maneira de transmitir informações entre partes de forma criptografada e autenticada.<br>
• **Mysql2** driver MySQL para Node.js que permite conectar e interagir com bancos de dados MySQL.<br>
• **Sequelize**  ORM que simplifica o acesso e manipulação de bancos de dados relacionais (MySQL).<br>
• **Bcrypt** criptografia de senhas, oferece funções de hash seguras para proteger senhas de usuários.<br>
• **Nodemon** reinicia o servidor automaticamente após alguma alteração.<br>

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

Vídeo demonstração utilizando o aplicativo: https://www.linkedin.com/feed/update/urn:li:ugcPost:7068991111091879936/
