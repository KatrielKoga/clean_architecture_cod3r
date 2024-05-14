import ProvedorCriptografia from '../../core/usuario/service/ProvedorCriptografia';

// na arquitetura hexagonal essa classe é um adaptador
export default class InverterSenhaCripto implements ProvedorCriptografia {
	criptografar(senha: string): string {
		return senha.split('').reverse().join('');
	}
}
