import CasoDeUso from '../../shared/CasoDeUso';
import Erros from '../../shared/Erros';
import Id from '../../shared/Id';
import Usuario from '../model/Usuario';
import ProvedorCriptografia from './ProvedorCriptografia';
import RepositorioUsuario from './RepositorioUsuario';

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
	constructor(
		private repo: RepositorioUsuario,
		private provedorCripto: ProvedorCriptografia
	) {}

	async executar(usuario: Usuario): Promise<void> {
		const senhaCripto = this.provedorCripto.criptografar(usuario.senha);

		const usuarioExistente = await this.repo.buscarPorEmail(usuario.email);
		if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

		const novoUsuario: Usuario = {
			id: Id.gerar(),
			email: usuario.email,
			nome: usuario.nome,
			senha: senhaCripto,
		};

		this.repo.inserir(novoUsuario);
	}
}
