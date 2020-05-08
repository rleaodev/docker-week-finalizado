# Docker Week
## Projeto realizado no [mini treinamento de Docker](https://docs.google.com/presentation/d/1dEqPCq7HTdhKUZkmUSuBbZdezEesf07RdgjJ6O4LlIo/edit#slide=id.g776cb0b241_0_464)

Este projeto tem por objetivo mostrar o poder que temos com o docker.

Aqui utilizamos o docker-compose para orquestrar nossa aplicação multi container e também utilizamos o conceito de sobrescrita de configurações para determinados ambientes.

Este conceito não encontra-se no material pois passamos ao vivo no treinamento devido ao questionamento dos envolvidos.

Criamos duas formas de executar a aplicação, deixando a cargo da pessoa com a qual ela fica mais confortável

### Overview do projeto

O usuário só consegue acessar a aplicação através do Load Balancer. <br>
O Load Balancer faz a comunicação com o backend. <br>
O Backend se comunica com o banco de dados

![Overvie do projeto](https://i.ibb.co/4pnZQbQ/Untitled-Diagram-1.jpg)


### Modelo "Copy/Paste"

Para executar essa aplicaço, basta executar:

```
docker-compose -f modelo-copy-and-paste.docker-compose.yaml up --build
```

### Modelo "Escalável"

Para executar essa aplicaço, basta executar:

```
docker-compose up --build
```
