
# 3. Padronização de código

O ESLint é uma ferramenta de análise de código estático para identificar padrões problemáticos encontrados no código JavaScript. É criado por Nicholas C. Zakas em 2013. As regras no ESLint são configuráveis ​​e as regras personalizadas podem ser definidas e carregadas.

### 3.1 Instalação

1 - Adicionar o eslint nas dependências de desenvolvimento do projeto.

    yarn add eslint -D

2- Inicializar Eslint:

    yarn eslint --init

Esse comando irá solicitar por algumas configurações, um padrão muito utilizado é o AirBnB:

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
 What type of modules does your project use? JavaScript modules (import/exp
ort )
- Which framework does your project use? None of these
- Does your project use TypeScript? No
- Where does your code run? Node
- How would you like to define a style for your project? Use a popular style
 guide
- Which style guide do you want to follow? Airbnb (https://github.com/airbnb
/javascript)
- What format do you want your config file to be in? JavaScript
- Would you like to install them now with npm? Yes

Instalando eslint and eslint-config-airbnb

-   Instale o plugin eslint no vscode
-   Instale o eslint (Você pode instalar global ou localmente)

    yarn add eslint -D
    

-   Instale o eslint-config-airbnb, que por sua vez precisa de algumas dependências: 

yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D

-   Crie um arquivo chamado .eslintrc.js e coloque o seguinte conteúdo:
- 

	module.exports  = {
		env: {
		es6:  true,
		jest:  true,
		browser:  true,
		},
		extends: ['airbnb', 'prettier', 'prettier/react'],
	}


A partir dai você vai começar a ver erros de lint no código.

Step 2

-   Instale o  prettier e suas respectivas dependências

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

-   Atualize o arquivo .eslintrc.js com os seguintes comandos:

    module.exports  = {

      env: {
        es6:  true,
        jest:  true,
        browser:  true,
      },
      extends: ['airbnb', 'prettier', 'prettier/react'],
      globals: {
        Atomics:  'readonly',
        SharedArrayBuffer:  'readonly',
        __DEV__:  true,
      },
      parserOptions: {
        ecmaFeatures: {
        jsx:  true,
      },
      ecmaVersion:  2018,
      sourceType:  'module',
      },
      plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
      rules: {
        'prettier/prettier':  'error',
        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export':  'off',
        'no-unused-vars': ['error', {argsIgnorePattern:  '^_'}],
        'react/jsx-one-expression-per-line':  'off',
        'global-require':  'off',
        'react-native/no-raw-text':  'off',
        'no-param-reassign':  'off',
        'no-underscore-dangle':  'off',
        camelcase:  'off',
        'no-console': ['error', {allow: ['tron']}],
        'react-hooks/rules-of-hooks':  'error',
        'react-hooks/exhaustive-deps':  'warn',
      },
      settings: {
        'import/resolver': {
        'babel-plugin-root-import': {
          rootPathSuffix:  'src',
        },
        },
      },
    };