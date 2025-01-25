# Desenvolva os seguintes exercícios no MongoDB,

## utilizando a base de dados Livros, utilizada nas aulas anteriores

1.  Lista alfabeticamente ordenada das categorias (sem repetição)
2.  Quantidade de livros de cada categoria, ordenada pelas maiores
    quantidades;
3.  Média de páginas dos livros das categorias Java e/ou Python, com data de
    publicação a partir do ano de 2008
4.  Atualizar os livros com status MEAP, que estejam com páginas zeradas
    para "Necessitam atualização páginas"
5.  Criar uma collection resumo_autor com o resultado da seguinte
    consulta:
    autor, quantidade de livros publicados pelo autor, média de páginas
    dos livros por ele publicados
6.  Livros cujo isbn inicia com '19' e que possuam no máximo 400 páginas
7.  Títulos e descrições dos livros, que possuem em sua descrição uma
    sequência de texto. Exemplos:
    'programming and business'
    'will help you decode the possibilities'
8.  Quantidade de livros e média de páginas dos títulos com status PUBLISH
    publicados em cada ano
9.  Cinco autores que mais publicaram livros nos meses de junho e julho
10. Criar uma collection com os IDs e os títulos de todos os livros
    sem categoria cadastrada
11. Para os autores que escreveram pelo menos 5 títulos, a quantidade
    de livros escritos por cada autor, em ordem alfabética
12. Analisar o campo thumbnailUrl e extrair o nome do servidor e o
    nome do arquivo que com as miniaturas das imagens dos livro

# Instalando mongoDB no ubuntu

Antes de instalar o pacote MongoDB, baixe o GnuPG e o utilitário cURL executando este comando na sua interface de linha de comando:

```
sudo apt-get install -y gnupg curl
```

Use o cURL e o GnuPG para importar a chave pública GPG do MongoDB e recuperar o pacote de instalação:

```
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
```

Após importar os pacotes oficiais do MongoDB, crie um arquivo de lista para instalação. O comando varia dependendo da sua versão do Ubuntu. Para o Ubuntu 22.04 ou posterior, execute:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

Atualize o repositório APT para sincronizar o banco de dados local:

```
sudo apt-get update
```

Execute o comando abaixo para instalar a versão estável mais recente do MongoDB usando o sistema de gerenciamento de pacotes APT:

```
sudo apt-get install -y mongodb-org
```

# Inicie o Serviço MongoDB

Após a instalação, execute o MongoDB Community Edition inserindo o seguinte:

```
sudo systemctl start mongod
```

O comando systemctl é essencial para a gestão do serviço MongoDB. Por exemplo, se você encontrar um erro, execute o seguinte para reiniciar os serviços em execução e tente iniciar o DBMS novamente:

```
sudo systemctl daemon-reload
```

Para descobrir se o MongoDB carregou corretamente, verifique seu status com este comando:

```
sudo systemctl status mongod
```

Por padrão, o serviço não inicia a partir da inicialização. Para que ele seja carregado automaticamente na inicialização, habilite o MongoDB usando o seguinte comando:

```
sudo systemctl enable mongod
```

Reinicie o MongoDB usando este comando para aplicar as alterações:

```
sudo systemctl restart mongod
```

Para executar digite `mongosh`
