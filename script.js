/* 
1 - Importação dos Dados - Importar os 1000 registros gerados para o MongoDB.
2 - Inserção de Novos Documentos - Inserir novos documentos na coleção.
3 - Atualização de Documentos - Atualizar dados de documentos existentes.
4 - Exclusão de Documentos - Excluir documentos com base em critérios.
5 - Consultas aos Documentos - Fazer consultas para recuperar documentos específicos.
6 - Operações de Agregação - Realizar operações de agregação como soma, contagem, e agrupamento.
*/

// Conecta o mongoDB
use bdTrabalho;

// Importando dados
mongoimport --db bdTrabalho --collection minhaColecao --file dados.json --jsonArray

// Inserir os dados importados na coleção
db.suaColecao.insertMany(dadosImportados);

// Inserir um novo documento
db.suaColecao.insertOne({
  nome: "Carlos Mendes",
  idade: 28,
  cidade: "Belo Horizonte"
});

// Inserir múltiplos documentos
db.suaColecao.insertMany([
  { nome: "Ana Paula", idade: 35, cidade: "Fortaleza" },
  { nome: "Paulo André", idade: 22, cidade: "Curitiba" }
]);

// Atualizar um único documento
db.suaColecao.updateOne(
  { nome: "Carlos Mendes" }, // Filtro
  { $set: { idade: 29 } } // Atualização
);

// Atualizar múltiplos documentos
db.suaColecao.updateMany(
  { cidade: "São Paulo" }, // Filtro
  { $set: { cidade: "Salvador" } } // Atualização
);

// Excluir um único documento
db.suaColecao.deleteOne({ nome: "Paulo" });

// Excluir múltiplos documentos
db.suaColecao.deleteMany({ idade: { $lt: 30 } });

// Consultar todos os documentos
db.suaColecao.find();

// Consultar documentos com filtro (ex: todos com idade > 30)
db.suaColecao.find({ idade: { $gt: 30 } });

// Consultar e projetar apenas campos específicos
db.suaColecao.find({ cidade: "São Paulo" }, { nome: 1, idade: 1 });

// Contar o número de pessoas por cidade
db.suaColecao.aggregate([
  { $group: { _id: "$cidade", total: { $sum: 1 } } }
]);

// Média de idade por cidade
db.suaColecao.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $sort: { mediaIdade: -1 } }  // Ordenar por média de idade (decrescente)
]);

// Filtrar cidades com media maior que 36
db.minhaColecao.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $match: { mediaIdade: { $gt: 30 } } }
]);