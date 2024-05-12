import TerminalUtil from '../util/TerminalUtil';
import menuFundamentos from './menuFuncamentos';
import menuUsuario from './menuUsuario';

export default async function menuPrincipal() {
	TerminalUtil.titulo('Menu Prinipal');

	const [indice] = await TerminalUtil.menu([
		'1. Fundamentos',
		'1. Usuário',
		'Sair',
	]);

	switch (indice) {
		case 0:
			await menuFundamentos();
			break;
		case 1:
			await menuUsuario();
			break;
		default:
			process.exit(0);
	}

	await menuPrincipal();
}
