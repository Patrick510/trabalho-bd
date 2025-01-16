import json
import random

def gerar_nome():
  nomes = ['João', 'Maria', 'Carlos', 'Ana', 'Paulo', 'Luana', 'Lucas', 'Fernanda', 'Pedro', 'Amanda']
  sobrenomes = ['Silva', 'Souza', 'Oliveira', 'Costa', 'Pereira', 'Lima', 'Alves', 'Rodrigues', 'Santos', 'Martins']
  nome = random.choice(nomes)
  sobrenome = random.choice(sobrenomes)
  
  return f"{nome} {sobrenome}"

def gerar_idade():
    return random.randint(18, 80) 

def gerar_cidade():
    cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Fortaleza', 'Curitiba', 'Salvador', 'Brasília', 'Porto Alegre', 'Recife', 'Manaus']
    return random.choice(cidades)

def gerar_registro():
    return {
        "nome": gerar_nome(),
        "idade": gerar_idade(),
        "cidade": gerar_cidade()
    }

registros = [gerar_registro() for _ in range(1000)]

with open('dados.json', 'w', encoding='utf-8') as f:
    json.dump(registros, f, ensure_ascii=False, indent=2)

print('Arquivo "dados.json" criado com 1000 registros!')