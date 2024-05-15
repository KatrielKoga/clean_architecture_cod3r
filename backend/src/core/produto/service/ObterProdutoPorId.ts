import CasoDeUso from '../../shared/CasoDeUso';
import Usuario from '../../usuario/model/Usuario';
import Produto from '../model/Produto';

export type Entrada = {
	produtoId: string;
	usuario: Usuario;
};

export default class ObterProdutoPorId implements CasoDeUso<Entrada, Produto> {
	constructor() {}

	async executar(entrada: Entrada): Promise<Produto> {
		return {
			id: entrada.produtoId,
			nome: 'Produto 1',
			preco: 10,
			consultadoPor: entrada.usuario.email,
		};
	}
}
