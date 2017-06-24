<p align="center"><a href="#" target="_blank"><img width="180"src="/uploads/ab17516a69d0d6cdbfee25653b811168/ID2.png"></a></p>

<p align="center">
    
    <a href="https://gitlab.com/Desenho-2017-1/Inter-Database/commits/development"><img src="https://gitlab.com/Desenho-2017-1/Inter-Database/badges/development/build.svg" alt="DSW 2017.1"></a>
    <a href="https://codecov.io/gl/Desenho-2017-1/Inter-Database"><img src="https://codecov.io/gl/Desenho-2017-1/Inter-Database/branch/development/graph/badge.svg?token=i3Cu8etR2n" alt="DSW 2017.1"></a>
  <a href=""><img src="https://img.shields.io/badge/DSW-2017.1-ff69b4.svg" alt="DSW 2017.1"></a>
  <a href="https://inter-database-documentation.herokuapp.com"><img src="https://img.shields.io/badge/Docs-ESDoc-blue.svg" alt="DSW 2017.1"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-v6.11-green.svg" alt="Node.js Version"></a>
  <a href="https://www.microsoft.com/pt-br/sql-server/"><img src="https://img.shields.io/badge/sql server-2016-red.svg" alt="SQL Server Version"></a>
<a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/mysql-5.7-orange.svg" alt="SQL Server Version"></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/postgresql-9.14.12-blue.svg" alt="PostgreSQL Version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT%20License-blue.svg" alt="License: MIT"></a>
  
</p>

# Inter Database Framework

## 1. O que é o Inter Database?

<p align="justify">&emsp;&emsp;O Inter Database é um <i>framework</i> que visa facilitar a comunicação entre uma aplicação em Node.js e um Banco de Dados. Essa comunicação inclui toda a parte de configuração do Banco, no âmbito da conexão, que é uma das dificuldades encontradas pela maioria dos desenvolvedores mais inexperientes, e inclui também a parte das querys, onde através de um simples método, o desenvolvedor pode realizar uma operação extremamente complexa no banco. </p>

<p align="justify">&emsp;&emsp;Além disto, o Inter Database também serve como uma forma de unificar a comunicação entre vários Bancos de Dados e uma aplicação, onde o desenvolvedor não necessita saber a sintaxe específica de cada banco para realizar comandos nos SGBDs.</p>

<p align="justify">&emsp;&emsp;Em linhas gerais, o <i>framework</i> é dividido em duas vertentes, que são as visões mais amplas de suas capacidades. A primeira vertente é a capacidade de se conectar à vários bancos diferentes e executar seus comandos específicos e a segunda é sua extensibilidade à novos bancos. Essas duas visões serão melhor detalhadas nos próximos tópicos.</p>

### 1.1. Conexão com o Banco

<p align="justify">&emsp;&emsp;Em uma aplicação mais complexa que use vários Bancos diferentes, exige que o desenvolvedor seja muito qualificado ou que na equipe de desenvolvimento tenha várias pessoas que entenda cada tecnologia diferente, e que saiba muito bem cada comando para utilizar com eficiência cada um dos seus bancos. Com o uso deste <i>framework</i> esta exigência é quebrada, onde o a complexidade é reduzida pois, com uma simples instância do Inter Database, qualquer desenvolvedor é capaz de utilizar uma gama de Bancos diferentes, sem ter que saber nenhuma sintaxe específica sobre eles.</p>

<p align="justify">&emsp;&emsp;Abaixo, segue uma representação figurativa da capacidade do Inter Database de se conectar há vários bancos diferentes de uma forma simples, de acordo com a necessidade do desenvolvedor em sua aplicação.</p>

<p align="center"><a href="#" target="_blank"><img width="450"src="/uploads/5cf67809a44684874bce1fb2eb57d066/dsw1.gif"></a><p align="center"><b><b>Figura 1 - Conexão entre o Inter Database e dois Bancos de Dados distintos.</b></p></p>

<p align="justify">&emsp;&emsp;Em uma aplicação cliente, o desenvolvedor pode herdar o Inter Database em uma classe Modelo, e por exemplo, utilizar seus métodos para funcionamento dos Getters e Setters.</p>

<p align="justify">&emsp;&emsp;Na figura abaixo, o desenvolvedor em uma parte do seu código tem a necessidade de fazer uma pesquisa em determinado banco, então utiliza o objeto do Inter Database para mandar as informações requeridas.</p>

<p align="center"><a href="#" target="_blank"><img width="450"src="/uploads/23803a5dfc77316d57a6239ee75aa8b6/dsw2.gif"></a><p align="center"><b><b>Figura 2 - Cliente realizando uma busca utilizando uma instância do Inter Database.</b></p></p>

<p align="justify">&emsp;&emsp;Após isso, o Inter Database processa as informações recebidas e, internamente, analisa qual o Banco que foi solicitado para realizar a operação. Após a análise, o <i>framework</i> abre a devida conexão com o banco correto para possibilitar a troca de informações e envia os dados para o Banco. Abaixo, segue uma pequena representação do que foi explicado.</p>

<p align="center"><a href="#" target="_blank"><img width="450"src="/uploads/6145c41f2683bfae2cb789238104baec/dsw3.gif"></a><p align="center"><b><b>Figura 3 - Processamento das informações e conexão com o Banco correto.</b></p></p>

<p align="justify">&emsp;&emsp;Em seguida, o Banco acionado retorna as informações que foram requeridas para o Inter Database. Com isso, o mesmo trata as informações recebidas do Banco e as converte para o formato JSON, que facilita seu uso na aplicação cliente do desenvolvedor. Após isso, a conexão com Banco utilizado é fechada. A imagem a seguir representa essa transação entre o <i>framework</i> e o Banco, e a aplicação recebendo os dados, onde, após a utilização do objeto, a conexão é fechada e o desenvolvedor segue escrevendo o seu código com os dados recebidos.</p>

<p align="center"><a href="#" target="_blank"><img width="450"src="/uploads/fde655a6d0cade20d6743564df8a5dca/dsw4.gif"></a><p align="center"><b><b>Figura 4 - Banco retornando as informações para a aplicação.</b></p></p>

<p align="justify">&emsp;&emsp;Ao projetar esta vertente do <i>framework</i>, foi utilizado o conceito de Caixa Preta, que é uma reutilização provida por composição e orientado por <i>Frozen Spots</i>. Ao utilizar a conexão com o Banco, o usuário apenas utiliza a composição dos serviços já desenvolvidos dentro do Inter Database, de acordo com a sua demanda específica.</p>

### 1.2. Configuração de um Novo Banco

<p align="justify">&emsp;&emsp;Atualmente, há uma gama de SGBDs diferentes e, para o escopo de desenvolvimento deste <i>framework</i> para a disciplina de DSW, foi possível abranger apenas a configuração/conexão de poucos bancos especificamente. Apesar disto, ele foi projetado com um ponto flexível que permite a adição de qualquer banco, apenas utilizando uma herança das classes principais de configuração e de conexão. Isto torna possível uma boa extensibilidade por parte do Inter Database, pois a adição de novos Bancos pode enriquecer mais ainda o projeto e ajudar um grupo maior de desenvolvedores que tem tais problemas.</p>

<p align="justify">&emsp;&emsp;Já para projetar esta vertente do <i>framework</i>, foi utilizado o conceito de Caixa Branca, que é a reutilização provida por pontos flexíveis, utilizando heranças, normalmente. Este ponto flexível do Inter Database. A figura a seguir representa o processo citado acima, onde o Inter Database (que é o "Pai"), contêm os pontos maleáveis, onde um Banco novo tem suporte para se integrar facilmente ao <i>framework</i>.</p>

<p align="center"><a href="#" target="_blank"><img width="450"src="/uploads/f35bed04f781500dfeb68c7e48368090/dsw5.gif"></a></a><p align="center"><b><b>Figura 5 - Adição de um Banco novo por Herança.</b></p</p>

<p align="justify">&emsp;&emsp;Com isso, o Inter Database por completo é um <i>framework</i> Caixa Cinza, que engloba tanto <i>Frozen Spots</i> e <i>Hot Spots</i> e é hibrido por utilizar em sua arquitetura pontos Caixa Preta e Caixa Branca.</p>

# 2. Instalando o Framework

### Instalando o módulo inter-database

<p align="justify">&emsp;&emsp; O pacote está disponível pelo <a href="https://www.npmjs.com/">npm</a>: </p>

```bash
$ npm install --save inter-database
```

### Código

<p align="justify">&emsp;&emsp;Importe o inter-database no inicio do seu código para utilizá-lo:</p>

```javascript
import InterDatabase from 'inter-database' // Importando o módulo npm
```

# 3. Guia de utilização

### 3.1 Configuration
<p align="justify">&emsp;&emsp;A configuração da conexão do banco de dados a ser utilizado é feita através de um <i>extends</i> da <b>InterConfiguration.js</b>. Onde ao final de sua implementação o objetivo é ter uma conexão estabelecida com o banco desejado. </p>

# 3. Utilizando o Framework

#### getConfiguration()
<p align="justify">Nesse método a configuração para a conexão com o banco desejado é feita, e  o retorno é o resultado da conexão feita. </p>

```javascript
const connection = INTERDB.getConfiguration() // Conexão com o banco requerido
```
### 3.2 Connection
<p align="justify">&emsp;&emsp; Após a configuração ter sido feita e a conexão estabelecida, a <b>Connection</b> permite uma fácil manipulação e acesso aos dados. Ela é implementada como um <i>extends</i> da <b>InterConnection.js</b>.</p>

#### constructor()
<p align="justify">&emsp;&emsp; O construtor herdado da InterConnection deve possuir apenas um objeto que possui as opções de configuração do banco, que no exemplo seria o <b>connection</b>.</p>

```javascript
const CONNECTION = new SQLServer(connection) // Objeto de conexão do SQL Server
```
```javascript
const CONNECTION = new MySQL(connection) // Objeto de conexão do SQL Server
```

#### select()
<p align="justify">&emsp;&emsp; Este método tem como objetivo retornar no banco um conjunto de tuplas em forma de objetos JSON, referente ao argumento solicitado, contidas na tabela indicada.</p>

```javascript
let table = 'User'

CONNECTION.select(table, '*') // Recuperando todas as tuplas da tabela User
```

<p align="justify">&emsp;&emsp;Ou até mesmo passando uma condição, que em SQL é representado pelo WHERE.</p>

```javascript
let condition = { Name: 'Danilo' }

CONNECTION.select(table, '*', condition) // Recuperando todas as tuplas da tabela User onde o atributo Name = Danilo
```

#### insert()
<p align="justify">&emsp;&emsp; Este método tem como objetivo inserir na tabela uma nova tupla, enviando um conjunto de informações contidas no <i>object</i>, que é um JSON que deve ser criado com as informações requeridas.</p>

```javascript
let table = 'User'
let object = {
  name: 'Vitor',
  age: '21'
}

CONNECTION.insert(table, object) // Insere o objeto na tabela User e cria um novo registro
```

#### update()
<p align="justify">&emsp;&emsp; Este método tem como objetivo atualizar a tabela indicada, inserindo um conjunto de informações através do <i>object</i>, de acordo com uma condição definida. Essa condição seria, por exemplo, um identificador no conjunto de dados.</p>

```javascript
let table = 'User'
let object = {
  name: 'Cecilia'
}
let condition = { name: 'Vitor' }

CONNECTION.update(table, condition, object) // Atualizando todos os registros ta tabela User que tem o atributo name = Vitor
```

#### delete()
<p align="justify">&emsp;&emsp; Este método tem como objetivo apagar uma determinada tupla em uma determinada tabela, solicitada pelo usuário. Este registro sera excluído de acordo com uma condição definida, como foi exemplificado no tópico anterior.</p>

```javascript
let table = 'User'
let condition = { name: 'Cecilia' }

CONNECTION.delete('*', table, condition) // Apagando todos os registros da tabela User que o atributo name = Cecilia
```

#### orderBy()
<p align="justify">&emsp;&emsp; Este método é utilizado para ordenar os registros de uma tabela de forma crescente ou decrescente no banco de dados. Através do <i>argument</i> dizemos qual argumento na tabela a ser ordenado e o <i>sortColumns</i> diz como cada coluna será ordenada.</p>

```javascript
let table = 'User'
let sortColumns = {
  name: ASC,
  age: DESC
}

CONNECTION.orderBy('*', table, sortColumns) // Retorna um array de colunas ordenadas, de acordo com o SortColumns
```

#### innerJoin()
<p align="justify">&emsp;&emsp; Esse método é utilizado para pegar no banco um conjunto de informações relacionadas, através de atributos em comum entre duas tabelas. </p>

```javascript
let tableA = {
  colunm: 'name' 
}
let tableB = {
  colunm: 'name' 
}

CONNECTION.innerJoin(tableA.colunm, tableB.colunm, tableA, tableB)
```

#### leftJoin()
<p align="justify">&emsp;&emsp;Este método tem como objetivo pegar no banco um conjunto de informações através de atributos em comum entre duas tabelas. Seu diferencial é que as informações a serem retornadas são referentes a primeira tabela, somadas as informações em comum entre as duas.</p>

```javascript
CONNECTION.leftJoin(tableA.colunm, tableB.colunm, tableA, tableB)
```

#### rightJoin()
<p align="justify">&emsp;&emsp;Este método tem como objetivo pegar no banco um conjunto de informações através de atributos em comum entre duas tabelas. Neste caso, as informações a serem retornadas são referentes a segunda tabela, somadas as informações em comum entre as duas.</p>

```javascript
CONNECTION.rightJoin(tableA.colunm, tableB.colunm, tableA, tableB)
```

#### outerJoin()
<p align="justify">&emsp;&emsp; Este método será utilizado quando a intenção é recuperar do banco um conjunto de informações de duas tabelas através de atributos em comum entre elas, mas, neste caso, as informações a serem retornadas são tudo que as duas tabelas não possuem em comum.</p>

```javascript
CONNECTION.outerJoin(tableA.colunm, tableB.colunm, tableA, tableB)
```

### 3.3 Criando sua própria classe concreta

<p align="justify">&emsp;&emsp; O <i>framework</i> permite que o usuário adicione classes próprias na hierarquia das especificadas, (<i>Connection</i> e <i>Configuration</i>) (<i><b>HotSpot</b></i>), isso permite que o usuário tenha a facilidade de adicionar sua classe em tempo de execução na hierarquia e estratégia de uso dos banco de dados. Além disso, a pessoa que esteja interessada no uso do <i>framework</i>, pode usufruir da herança no que se diz respeito à métodos já implementados pela classe pai, sendo assim evita reescrita de código por parte do usuário.</p>

<p align="justify">&emsp;&emsp; Dessa forma é necessário que o usuário saiba qual e o padrão esperado pelas classes a serem adicionadas.</p>

#### addDB(newConfigClass, newConnectionClass)
<p align="justify">&emsp;&emsp; Esse método se encontra na classe <b><i>InterDatabase</i></b> e é aqui que a classe filha é criada. Para adicionar uma classe no framework é necessário criar dois objetos <b><i>newConfigClass</i></b> e <b><i>newConnectionClass</i></b>, sendo que esses objetos seguem a conformidade a baixo:</p>

##### newConfigClass
```javascript
/**
* O objeto deve ser contruído no formato:
* key: anonymousFunction,
* key: anonymousFunction
*
* Onde key é igual ao nome da função referência com assinatura na classe abstrata.
*/

{
  select: (table, argument, object, thisInstance) => {
    // custom implementation
    return Object
  },

  selectDistinct: (table, argument, thisInstance) => {
    // custom implementation
    return Object
  }
  /*
    ... all other required methods and custom methods.
  */
}
```

##### newConnectionClass
```javascript
/**
* O objeto deve ser contruído no formato:
* type: 'database name',
* key: anonymousFunction,
* key: anonymousFunction
*
* Onde key é igual ao nome da função referência com assinatura na classe abstrata
* e a key type é obrigatória.
*/

{
  type: 'sqlite',

  getConfiguration: (thisInstance) => {
    // custom implementation
    return Object
  }
}
```

Após criado esses objetos deve-se chamar a referência de _InterDatabase_ e invocar o método _addDB_ passando ambos objetos `InterDatabase.addDB(newConfigClass, newConnectionClass)`.

O método retorna verdadeiro ou falso, dependendo do sucesso da adição da classe. Para mais informações no método consulte a [documentação](https://inter-database-documentation.herokuapp.com).

#### 3.3.1. Utilizando a nova classe
Para instanciar um novo objeto da classe adicionada basta seguir os mesmos passos de uma instanciação normal. Onde é necessário apenas invocar o construtor de **_InterDatabase_** e prover o tipo especificado no objeto de configuração (_type_). Sendo assim sua utilização se tornaria:

```javascript
let myNewClass = new InterDatabase('test', 'root', 'root', {
                                    type: 'sqlite'
                                  })
```

# 4. Licença

Inter Database é distribuído sob a licença MIT. Consulte [MIT LICENSE](https://gitlab.com/Desenho-2017-1/Inter-Database/blob/development/LICENSE) para obter detalhes.
