/* 
1 - Importação dos Dados - Importar os 1000 registros gerados para o MongoDB.
2 - Inserção de Novos Registros - Inserir novos Registros na coleção.
3 - Atualização de Registros - Atualizar dados de Registros existentes.
4 - Exclusão de Registros - Excluir Registros com base em critérios.
5 - Consultas aos Registros - Fazer consultas para recuperar Registros específicos.
6 - Operações de Agregação - Realizar operações de agregação como soma, contagem, e agrupamento.
*/

// Importando dados
mongoimport --db bdTrabalho --collection myCollection --file dados.json --jsonArray

// Conecta o mongoDB
use bdTrabalho;

// Inserir um novo Registro
db.myCollection.insertOne({
  nome: "Carlos Mendes",
  idade: 28,
  cidade: "Belo Horizonte"
});

// Inserir múltiplos Registros
db.myCollection.insertMany([
  { nome: "Ana Paula", idade: 35, cidade: "Fortaleza" },
  { nome: "Paulo André", idade: 22, cidade: "Curitiba" }
]);

// Atualizar um único Registro
db.myCollection.updateOne(
  { nome: "Carlos Mendes" },
  { $set: { idade: 29 } }
);

// Atualizar múltiplos Registros
db.myCollection.updateMany(
  { cidade: "São Paulo" },
  { $set: { cidade: "Salvador" } }
);

// Excluir um único Registro
db.myCollection.deleteOne({ nome: "Paulo Souza" });

// Excluir múltiplos Registros
db.myCollection.deleteMany({ idade: { $lt: 30 } });

// Consultar todos os Registros
db.myCollection.find();

// Consultar Registros com filtro (ex: todos com idade > 30)
db.myCollection.find({ idade: { $gt: 30 } });

// Consultar e projetar apenas campos específicos
db.myCollection.find({ cidade: "Salvador" }, { nome: 1, idade: 1 });

// Contar o número de pessoas por cidade
db.myCollection.aggregate([
  { $group: { _id: "$cidade", total: { $sum: 1 } } }
]);

// Média de idade por cidade - Ordena por média de idade (decrescente)
db.myCollection.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $sort: { mediaIdade: -1 } } 
]);