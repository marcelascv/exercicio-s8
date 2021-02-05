// passo-a-passo

// 1: importar o JSON de musicas
// 2: criar o método para buscar todos os musicas
// 3: exportar o método

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima
// ../../ subir mais um nível e quando mais você colocar mais níveis vai subindo

const musicas = require('../model/musicas.json');
//const artistas = require('../model/artistas.json');

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(musicas);
} 

// passo-a-passo

// 1: criar método getByID
// 2: retornar o item daquele ID
// filter ele vai buscar todos os itens que passar na validação
// nesse caso aqui o ideal é que o ID seja único e vai retornar
// então o melhor é usar o método find, porque ele vai retornar o primeiro item que ele achar naquela condição

const getByID = (req, res) => {
    const id = req.params.id

    // método find retorna o primeiro elemento que passa na condição
    const musicaFiltrada = musicas.find((musica) => musica.id == id)

    res.status(200).send(musicaFiltrada)
}

// passo-a-passo

// 1: criar método getAllArtists
// 2: filtar lista de músicas por artistas

//const getAllArtists = (req, res) => {
//    console.log(req.url);
//    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
//    res.status(200).send(artistas);
//}

// passo-a-passo

// 1: criar método getByArtists
// 2: retornar todas as músicas do artista filtrado

const getByArtists = (req, res) => {
    const artista = req.params.artista

    // método filter retorna todos os elementos que a condição for verdadeira
    const artistaFiltrado = musicas.filter((musica) => musica.artista == artista)

    res.status(200).send(artistaFiltrado);
}

// passo-a-passo

// 1: criar método getAllArtists
// 2: retornar somente o nome dos artistas da lista de música

const getAllArtists = (req, res) => {
    const artistas = musicas.map((musica) => musica.artista)

    res.status(200).send(artistas)
}

module.exports = { getAll, getByID, getAllArtists, getByArtists }