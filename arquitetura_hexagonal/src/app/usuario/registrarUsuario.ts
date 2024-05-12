import SenhaCripto from '../../adapter/auth/SenhaCripto';
import RepositorioUsuarioPg from '../../adapter/db/RepositorioUsuarioPg';
import Usuario from '../../core/usuario/model/Usuario';
import RegistrarUsuario from '../../core/usuario/service/RegistrarUsuario';
import TerminalUtil from '../util/TerminalUtil';

export default async function registrarUsuario() {
	const { titulo, campoRequerido, sucesso, erro, esperarEnter } = TerminalUtil;
	titulo('Registrar Usuário');

	const nome = await campoRequerido('Nome: ');
	const email = await campoRequerido('Email: ');
	const senha = await campoRequerido('Senha: ');

	const usuario: Usuario = { nome, email, senha };

	try {
		const repo = new RepositorioUsuarioPg();
		const provedorCripto = new SenhaCripto();
		const CasoDeUso = new RegistrarUsuario(repo, provedorCripto);

		await CasoDeUso.executar(usuario);
		sucesso('Usuário registrado com sucesso');
	} catch (e: any) {
		erro(e.message);
	} finally {
		await esperarEnter();
	}
}
