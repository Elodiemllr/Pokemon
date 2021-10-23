const express = require("express");
require("dotenv").config({ path: "./config/.env" });

// Pour prendre en charge mes requêtes multi origins
const cors = require("cors");
const app = express();

//Préciser ce qu'on autorise niveau requêtes
const corsOptions = {
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};

// On dit à express d'utiliser cors pour pouvoir faire nos requêtes
app.use(cors(corsOptions));
//pour traiter la data de la requete qui va transiter et la  mettre au bon format (body-parser maintenant integrer à express)
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
