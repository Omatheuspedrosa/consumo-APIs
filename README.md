# consumo-APIs
Repositório para demonstrações de APIs

- **Ponto de entrada**: é o endereço do serviço hospedado e que pode ser acessado através de um navegador ou uma ferramenta de cunsumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2/deputados>.
- **Recursos**: são serviços de dados disponíveis para consumo.
Exemplo: /deputados -> <https://dadosabertos.camara.leg.br/api/v2/deputados/deputados>.
-  **Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela API. Os parâmetros para a API atrvés da URL ou no corpo (body) da requisição. Exemplo: ?nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=bebeto>.
- **Métodos**: são os modos de consumo de uma API, que podem ser:
    - POST: inserção (CREATE)
    - GET: consulta/leitura (READ)
    - UPDATE: atualização (UPDATE)
    - DELETE: deleção (DELETE)

NPX -> Node Package eXecuter (Executor de pacote do Node)

TO-DO (documentar):
<!-- - Instalação e uso do Json Server: <https://github.com/typicode/json-server>. -->
Para a instalação do json-server, o seguinte comando no CLI deve ser executado: `npm install json-server`.

Para começar a utiliza-lo, deve-se criar um arquivo do tipo _.json_ ou _.json5_

<!-- - Criação do script "start" no package.json -->
No arquivo package.json, criamos o objeto 'script' e atribuimos a ele a chave 'start', com o valor `npx json-server data/db.json5`. Na qual a chave representa o evento e o valor o comando a ser executado.

<!-- - Observações em relação ao uso do JSON5 VS JSON -->


<!-- -Instalação das extensões para formatação de arquivo .json5 -->


<!-- - Chamada do script start com NPM ao invés do NPX -->


<!-- - O que é o Chocolatey (e porque não instalá-lo agora) -->

Da aula de sexta (10/05):
- Instalação de dependências de projeto com o comando npm install


## Requisição

Para criar uma nova requisição, podemos utilizar a função fetch API. 

~~~js
const requisicao = new Request("http://localhost:3000/produtos", {
  method: "GET",
  headers: {
    "Content-type": "aplication/json",
  },
});
~~~

Utilizamos `new Request()` para _instanciar_ a interface `Request()` na váriavel `requisicao`, de forma que ela se torna um objeto com os métodos exigidos por essa interface.

A requisição é constituída por duas partes: uma URL e um objeto JSON contendo as opções da requisição. `method` define o metódo da requisição (GET, POST, PUT, DELETE, etc.) e `headers` define os cabeçalhos da requisição.
- **URL**: 