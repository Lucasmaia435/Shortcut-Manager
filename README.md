# Shortcut Manager

### Crie atalhos personalizados no seu computador

## Instalação

### Caso já possua o node instalado no seu pc : 
```bash
...> git clone https://github.com/Lucasmaia435/Shortcut-Manager.git

...> cd "Shortcut-Manager"

...\Shortcut-Manager> npm install
```
### Caso não tenha o node : 
Instale o Node a partir deste link : https://nodejs.org/.

Após instalar o Node, verifique as suas versões. 
```bash
node -v
npm -v
```
Output: 
```bash
v10.16.0
6.9.0
```

Vá para o lugar que você quer instalar o programa pelo terminal

```bash
...> git clone https://github.com/Lucasmaia435/Shortcut-Manager.git

...> cd "Shortcut-Manager"

...\Shortcut-Manager> npm install
```

## Adicionando atalhos

Entre no arquivo `shortcuts.json` e adicione/altere os atalhos existentes.

Ex.:

```JSON
{
    "name":"Visual Studio Code",
    "type":"command",
    "command": "code",
    "shortcut":"Shift+c"
},
```

Todos os atalhos, tem que ter o seu nome, tipo, atalho e um último argumento que varia junto com o seu tipo. Até então, o programa está configurado para 3 tipos: 

* `exec` : Executa algum arquivo/programa


### Exemplo de `exec`
```JSON
{
    "name":"Google Chrome",
    "type":"exec",
    "file": "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "shortcut":"Shift+O"
}
```
> Sempre que for copiar o caminho do arquivo em `file` troca as ' \ ' por ' / '.

* `command` : Executa um comando de no terminal
### Exemplo de `command`


```JSON
{
    "name":"Gerenciador de tarefas",
    "type":"command",
    "command": "taskmgr",
    "shortcut":"Ctrl+y"
}
```

* `console` : Retorna alguma mensagem.
### Exemplo de `console`


```JSON
{
    "name":"Mensagem de teste",
    "type":"console",
    "console": "Hello World!",
    "shortcut":"Ctrl+M"
}
```

## Iniciar

```bash
    ...\Shortcut-Manager> npm start
```