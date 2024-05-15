// na arquitetura hexagonal essa interface é uma porta
export default interface ProvedorCriptografia {
	criptografar(texto: string): string;
	comparar(senha: string, senhaCriptografada: string): boolean;
}
