const express = require("express");
//Express: faz o "Correios"
const cors = require("cors");
//Cors: Compartilhamento de recursos, dados da API
const { default: axios } = require("axios");
//Axios: Axios é uma biblioteca de cliente HTTP que permite fazer solicitações 
//para um determinado endpoint. Este endpoint pode ser uma API ou seu próprio
//servidor Node.js de back-end, por exemplo

const app = express();
//recebeu o express
app.use(express.json())
//o express tem a possiblidade de receber os dados como arquivo json(array com info´s)
//trazer as info em forma de arquivo json
app.use(cors({ origin: true }));
//Se a origem for verdadeira, ele sai de onde está e vai fazer a comunicação

app.post("/auth", async (req, res) => {
    //post= enviar dados
    const { username } = req.body;
    //se tiver username, trás 

    try {
        const r = await axios.put(
            // await: na espera do async
            "https://api.chatengine.io/users",
            //envio do portal onde eu vou acessar
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "b63f7366-14c0-47ee-9453-87f3372c92f3" } }
            //requisições da api (req)
        );
        return res.status(r.status).json(r.data)
            //trazer os status em forma de json
    }
    //Try: tentativa, se não achar, usamos o "Catch"
    //Catch: Erro, só utilizamos para isso 
    catch (e) {
        return res.status(e.response.status).json(e.response.data);
        //caso der erro, resposta com status, mostra o erro
    }

});
app.listen(3001);
//Porta de escuta