import TerminalUtil from '../util/TerminalUtil';
import menuFundamentos from './menuFuncamentos';

export default async function menuPrincipal() {
	TerminalUtil.titulo('Menu Prinipal');

	const [indice] = await TerminalUtil.menu(['1. Fundamentos', 'Sair']);

	switch (indice) {
		case 0:
			await menuFundamentos();
			break;
		case 1:
			process.exit(0);
	}

	await menuPrincipal();
}
