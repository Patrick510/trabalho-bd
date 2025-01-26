// Importando os dados para a coleção livros
mongoimport --db Livros --collection livros --file livros.json --jsonArray

// Certifique-se de estar no banco de dados correto
use Livros;

// 1. Lista alfabeticamente ordenada das categorias (sem repetição)
db.livros.distinct("categories").sort()

// 2. Quantidade de livros de cada categoria, ordenada pelas maiores quantidades
db.livros.aggregate([
  { $unwind: "$categories" },
  { $group: { _id: "$categories", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]) 

// 3. Média de páginas dos livros das categorias Java e/ou Python, publicados após 2008
db.livros.aggregate([
  { 
    $match: {
      categories: { $in: ["Java", "Python"] },
      "publishedDate": { $gte: new Date("2008-01-01") }
    }
  },
  { $group: { _id: null, mediaPaginas: { $avg: "$pageCount" } } }
]) 

// 4. Atualizar os livros com status MEAP e páginas zeradas
db.livros.updateMany(
  { status: "MEAP", pageCount: 0 },
  { $set: { status: "Necessitam atualização páginas" } }
);

// 5. Criar uma collection resumo_autor com informações sobre os autores
db.livros.aggregate([
  { $unwind: "$authors" },
  { 
    $group: { 
      _id: "$authors",
      totalLivros: { $sum: 1 },
      mediaPaginas: { $avg: "$pageCount" }
    }
  },
  { $out: "resumo_autor" }
]);

// 6. Livros cujo ISBN inicia com '19' e possuem no máximo 400 páginas
db.livros.find(
  { 
    isbn: { $regex: "^19" },
    pageCount: { $lte: 400 }
  },
  { title: 1, isbn: 1, pageCount: 1, _id: 0 }
).toArray()

// 7. Títulos e descrições dos livros com palavras específicas
db.livros.find(
  { 
    longDescription: { $regex: /programming and business|will help you decode the possibilities/i }
  },
  { title: 1, longDescription: 1, _id: 0 }
).toArray()

// 8. Quantidade de livros e média de páginas publicados a cada ano com status PUBLISH
db.livros.aggregate([
  { 
    $match: { status: "PUBLISH" } 
  },
  {
    $group: {
      _id: { $year: "$publishedDate" },
      totalLivros: { $sum: 1 },
      mediaPaginas: { $avg: "$pageCount" }
    }
  },
  { 
    $sort: { "_id": 1 }
  }
])

// 9. Cinco autores que mais publicaram livros em junho e julho
db.livros.aggregate([
  {
    $addFields: { mes: { $month: "$publishedDate" } } 
  },
  { 
    $match: { mes: { $in: [6, 7] } } 
  },
  { 
    $unwind: "$authors" 
  },
  {
    $group: {
      _id: "$authors", 
      totalLivros: { $sum: 1 } 
    }
  },
  { 
    $sort: { totalLivros: -1 } 
  },
  { 
    $limit: 5 
  }
])


// 10. Criar uma collection com IDs e títulos de livros sem categoria
db.livros.aggregate([
  { $match: { categories: { $exists: false } } },
  { $project: { _id: 1, title: 1 } },
  { $out: "livros_sem_categoria" }
]);

// 11. Autores com pelo menos 5 títulos, em ordem alfabética
db.livros.aggregate([
  { $unwind: "$authors" },
  { 
    $group: { 
      _id: "$authors", 
      totalLivros: { $sum: 1 }
    }
  },
  { $match: { totalLivros: { $gte: 5 } } },
  { $sort: { _id: 1 } }
])

// 12. Extrair o servidor e o nome do arquivo do campo thumbnailUrl
db.livros.aggregate([
  { 
    $project: { 
      servidor: { $arrayElemAt: [{ $split: ["$thumbnailUrl", "/"] }, 2] },
      arquivo: { $arrayElemAt: [{ $split: ["$thumbnailUrl", "/"] }, -1] }
    }
  }
]).toArray()
