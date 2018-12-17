# API de busca de produtos

Uma API que retorna uma lista de produtos. 

**Página da API:** https://ammotest-products-api.herokuapp.com

## Requisitos

1. Criar uma API que armazene produtos de uma loja e os retorne para os usuários;

## Ferramentas utilizadas

1. EcmaScript2015;
2. MongoDb;
3. Mongoose;
4. Express.js;
5. Node.js;
6. Postman;
7. Hosting no Heroku.

## Como acessar o banco de dados da API:

### Método 'GET'

1. Fazer uma requisição para a página `ammotest-products-api.herokuapp.com/products`.
2. Não é necessário login de usuário ou token para utilizar a API.

### Informações fornecidas

    method: 'GET',
    status: 200,
    products: [
      {
        _id: '5c171fb49f11ab3ae4b99d40',
        item: 'Toalha One for All Fio Penteado',
        productLine: 'One for All,
        productImage: {
          img0: 'uploads/1545019312775-toalha1.jpg',
          img1: 'uploads/1545019312776-toalha2.jpg',
          img2: 'uploads/1545019312776-toalha3.jpg', 
          img3: 'uploads/1545019312777-toalha4.jpg'
        }
        originalPrice: 79.9,
        newestPrice: 59.9,
        category: 'banho',
        keywords: 'toalha, banho, avulsa, 100% algodão, cinza, fio penteado, one for all'
      }
    ]

## Histórico

#### Versão 1.0.0 - MVP

Primeira versão da API entregue em 17/12/2018. Nesta versão estão disponíveis as seguintes funcionalidades:

- 'POST' - Cadastrar produtos; :heavy_check_mark:
- 'GET' - Fazer uma requisição ao banco de dados da API e receber uma lista de produtos como retorno; :heavy_check_mark: 
- 'PATCH' - Editar dados dos produtos existentes no banco de dados; :heavy_check_mark: 
- 'DELETE' - Deletar produtos; :heavy_check_mark: 

### Versão 2.0.0 - TBA

Para a versão 2.0.0, desejo desenvolver as seguintes funcionalidades:

- Impedir que qualquer usuário possa acessar os métodos 'POST', 'PATCH' e 'DELETE'.
