/* 
1 - Importação dos Dados - Importar os 1000 registros gerados para o MongoDB.
2 - Inserção de Novos Registros - Inserir novos Registros na coleção.
3 - Atualização de Registros - Atualizar dados de Registros existentes.
4 - Exclusão de Registros - Excluir Registros com base em critérios.
5 - Consultas aos Registros - Fazer consultas para recuperar Registros específicos.
6 - Operações de Agregação - Realizar operações de agregação como soma, contagem, e agrupamento.
*/

mongoimport --db bdTrabalho --collection myCollection --file dados.json --jsonArray

// Inserção de Novos Registro
db.myCollection.insertOne({
  nome: "Carlos Mendes",
  idade: 28,
  cidade: "Belo Horizonte"
});

db.myCollection.insertMany([
  { nome: "Ana Paula", idade: 35, cidade: "Fortaleza" },
  { nome: "Paulo André", idade: 22, cidade: "Curitiba" }
]);

// Atualização de Registros
db.myCollection.updateOne(
  { nome: "Carlos Mendes" },
  { $set: { idade: 29 } }
);

db.myCollection.updateMany(
  { cidade: "São Paulo" },
  { $set: { cidade: "Salvador" } }
);

// Exclusão de Registros
db.myCollection.deleteOne({ nome: "Paulo Souza" });

db.myCollection.deleteMany({ idade: { $lt: 30 } });

// Consultas aos Registros
db.myCollection.find();

db.myCollection.find({ idade: { $gt: 30 } });

db.myCollection.find({ cidade: "São Paulo" }, { nome: 1, idade: 1 });

// Operações de Agregação
db.myCollection.aggregate([
  { $group: { _id: "$cidade", total: { $sum: 1 } } }
]);

db.myCollection.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $sort: { mediaIdade: -1 } } 
]);