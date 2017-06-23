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


# 2. Instalação
## 2.1. Pré-requisitos
## 2.2. Instalando o Framework

# 3. Utilizando o Framework

# 4. Licença

Inter Database é distribuído sob a licença MIT. Consulte [MIT LICENSE](https://gitlab.com/Desenho-2017-1/Inter-Database/blob/development/LICENSE) para obter detalhes.