/* 
1 - Importação dos Dados - Importar os 1000 registros gerados para o MongoDB.
2 - Inserção de Novos Documentos - Inserir novos documentos na coleção.
3 - Atualização de Documentos - Atualizar dados de documentos existentes.
4 - Exclusão de Documentos - Excluir documentos com base em critérios.
5 - Consultas aos Documentos - Fazer consultas para recuperar documentos específicos.
6 - Operações de Agregação - Realizar operações de agregação como soma, contagem, e agrupamento.
*/

// Importando dados
mongoimport --db bdTrabalho --collection myCollection --file dados.json --jsonArray

// Conecta o mongoDB
use bdTrabalho;

// Inserir um novo documento
db.myCollection.insertOne({
  nome: "Carlos Mendes",
  idade: 28,
  cidade: "Belo Horizonte"
});

// Inserir múltiplos documentos
db.myCollection.insertMany([
  { nome: "Ana Paula", idade: 35, cidade: "Fortaleza" },
  { nome: "Paulo André", idade: 22, cidade: "Curitiba" }
]);

// Atualizar um único documento
db.myCollection.updateOne(
  { nome: "Carlos Mendes" },
  { $set: { idade: 29 } }
);

// Atualizar múltiplos documentos
db.myCollection.updateMany(
  { cidade: "São Paulo" },
  { $set: { cidade: "Salvador" } }
);

// Excluir um único documento
db.myCollection.deleteOne({ nome: "Paulo" });

// Excluir múltiplos documentos
db.myCollection.deleteMany({ idade: { $lt: 30 } });

// Consultar todos os documentos
db.myCollection.find();

// Consultar documentos com filtro (ex: todos com idade > 30)
db.myCollection.find({ idade: { $gt: 30 } });

// Consultar e projetar apenas campos específicos
db.myCollection.find({ cidade: "São Paulo" }, { nome: 1, idade: 1 });

// Contar o número de pessoas por cidade
db.myCollection.aggregate([
  { $group: { _id: "$cidade", total: { $sum: 1 } } }
]);

// Média de idade por cidade - Ordena por média de idade (decrescente)
db.myCollection.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $sort: { mediaIdade: -1 } } 
]);

// Filtrar cidades com media maior que 36
db.minhaColecao.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $match: { mediaIdade: { $gt: 30 } } }
]);