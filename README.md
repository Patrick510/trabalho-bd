# O que fazer?

- Criar um script para o MongoDB que contenha operações de:

# criação do BD;

- importação a partir de um arquivo para uma collection do BD criado (mínimo 1000 registros);
- inserção de novos documentos;
- atualização dos dados dos documentos;
- exclusão de documentos;
- consultas aos documentos cadastrados;
- Utilização de operações de agregação;

# O que entregar?

- script;
- arquivo de dados;
- breve detalhamento de como executar;
- slides se for utilizar;
- link para o(s) vídeo(s) produzido(s) pelo estudante, conforme descrito a seguir

# Apresentação no formato de Vídeo

- Grave um ou vários vídeos, que somados tenham entre 7 e 10 minutos.
- Uso obrigatório de sua imagem e compartilhamento da tela do computador, explicando o que foi desenvolvido.
- Pode usar o meet com a conta institucional ou qualquer outro aplicativo de gravação.
- Compartilhar o(s) vídeo(s) com o professor.
- Náo se preocupe em editá-los, pois estou interessado apenas nas ideias.

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
