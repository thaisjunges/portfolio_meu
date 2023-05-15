#CRIE UM PROGRAMA QUE LEIA O NOME COMPLETO DE UMA PESSOA E MOSTRE:

#O NOME COM TODAS AS LETRAS MAIÚSCULAS, MINÚSCULAS E QUANTAS LETRAS AO todo
#SEM CONSIDERAR ESPAÇOS E QUANTAS LETRAS TEM O PRIMEIRO NOME.

from jinja2 import Template

app = Template(open('index.html')).read()

def processa_nome(nome):
    n = nome.replace(" ", "")
    nome_upper = nome.upper()
    nome_lower = nome.lower()
    n_caracteres = len(n)
    primeira_palavra = len(nome.split()[0])
    return {'nome_upper': nome_upper, 'nome_lower': nome_lower, 'n_caracteres': n_caracteres, 'primeira_palavra': primeira_palavra}


if __name__ == '__main__':
    nome = input("Digite seu nome completo:")
    resultado = processa_nome(nome)
    output = app.render(nome=nome, resultado=resultado)
    print(output)
