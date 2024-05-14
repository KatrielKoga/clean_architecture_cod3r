import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg';
import SenhaCripto from './external/auth/SenhaCripto';
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';

const app = express();
const porta = process.env.API_PORT ?? 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}!`);
});

// -------------------- rotas abertas

const repositorioUsuario = new RepositorioUsuarioPg();
const provedorCripto = new SenhaCripto();
const registrarUsuario = new RegistrarUsuario(
	repositorioUsuario,
	provedorCripto
);

new RegistrarUsuarioController(app, registrarUsuario);