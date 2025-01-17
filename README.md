# Projeto de Banco de Dados com MongoDB

## Visão Geral

Este projeto demonstra a execução de tarefas comuns em um banco de dados MongoDB, incluindo:

- Importação de dados.
- Inserção, atualização e exclusão de documentos.
- Consultas e operações de agregação.

📹 **Confira o vídeo explicativo:** [Link para o vídeo](https://youtu.be/OXSjNXi4t2I)

## Contextualização

Antes de iniciar no MongoDB, é necessário gerar os registros em formato JSON que serão utilizados como base de dados. Isso é feito através do script `gerar-dados.py`, que cria um arquivo chamado `dados.json` contendo 1000 registros fictícios.

Após a geração do arquivo, ele será importado para o MongoDB para permitir a execução das operações descritas no projeto.

## Execução

1. Para executar o script Python, use:

   - **Linux/MacOS:** `python3 gerar_dados.py`
   - **Windows:** `python gerar_dados.py`

   Caso o Python não esteja instalado, [clique aqui](https://www.python.org/downloads/) para acessar o tutorial de instalação.

2. Importe o arquivo gerado para o MongoDB utilizando:

   ```bash
   mongoimport --db bdTrabalho --collection myCollection --file dados.json --jsonArray
   ```

   Caso o MongoDB não esteja instalado, [clique aqui](https://www.mongodb.com/docs/manual/installation/) para acessar o guia de instalação.

3. Utilize os comandos do `script.js` para executar as operações descritas.

   **Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

Para mais detalhes, assista ao [vídeo explicativo](https://youtu.be/OXSjNXi4t2I).

## Scripts Utilizados

### Gerar Dados

O script `gerar-dados.py` gera 1000 registros para o MongoDB:

```python
# Script completo para geração de dados
```

### Comandos MongoDB

Os comandos MongoDB estão descritos no arquivo `script.js` e podem ser executados diretamente no terminal do MongoDB.

## Requisitos Cumpridos

### ✅ Importação a partir de um arquivo para uma collection do BD criado (mínimo 1000 registros)

O arquivo `gerar-dados.py` gera um arquivo JSON com 1000 registros fictícios:

```python
import json
import random

# Código para gerar os dados
```

Após gerar o arquivo `dados.json`, utilizamos o comando abaixo para importar os dados para o MongoDB:

```bash
mongoimport --db bdTrabalho --collection myCollection --file dados.json --jsonArray
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

### ✅ Inserção de novos documentos

Exemplo de inserção de um único documento:

```javascript
db.myCollection.insertOne({
  nome: "Carlos Mendes",
  idade: 28,
  cidade: "Belo Horizonte",
});
```

Inserção de múltiplos documentos:

```javascript
db.myCollection.insertMany([
  { nome: "Ana Paula", idade: 35, cidade: "Fortaleza" },
  { nome: "Paulo André", idade: 22, cidade: "Curitiba" },
]);
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

### ✅ Atualização dos dados dos documentos

Atualizar um único documento:

```javascript
db.myCollection.updateOne({ nome: "Carlos Mendes" }, { $set: { idade: 29 } });
```

Atualizar múltiplos documentos:

```javascript
db.myCollection.updateMany(
  { cidade: "São Paulo" },
  { $set: { cidade: "Salvador" } }
);
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

### ✅ Exclusão de documentos

Excluir um único documento:

```javascript
db.myCollection.deleteOne({ nome: "Paulo Souza" });
```

Excluir múltiplos documentos:

```javascript
db.myCollection.deleteMany({ idade: { $lt: 30 } });
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

### ✅ Consultas aos documentos cadastrados

Consultar todos os documentos:

```javascript
db.myCollection.find();
```

Consultar documentos com filtro:

```javascript
db.myCollection.find({ idade: { $gt: 30 } });
```

Consultar e projetar campos específicos:

```javascript
db.myCollection.find({ cidade: "Salvador" }, { nome: 1, idade: 1 });
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**

### ✅ Utilização de operações de agregação

Contar o número de pessoas por cidade:

```javascript
db.myCollection.aggregate([{ $group: { _id: "$cidade", total: { $sum: 1 } } }]);
```

Calcular a média de idade por cidade e ordenar por média de idade (decrescente):

```javascript
db.myCollection.aggregate([
  { $group: { _id: "$cidade", mediaIdade: { $avg: "$idade" } } },
  { $sort: { mediaIdade: -1 } },
]);
```

**Lembre-se de sempre consultar caso faça uma alteração para entender de forma visual o que foi feito.**
