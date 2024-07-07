const express = require("express")
const nconf = require("nconf")
const morgan = require("morgan")
const pkg = require ("./package.json")

nconf.defaults({ "conf": __dirname+"config.json"})
nconf.file(nconf.get("conf"))

const app = express()
app.use(morgan("dev"))


app.get("/api/healthcheck", (req, res)=>res.status(200).json(pkg.version))

app.listen(nconf.get('port') || 6543, ()=>console.log("listening on port : 6543"))
