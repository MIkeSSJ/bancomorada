import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("fulano", 10000, 12345678911);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("sicrano", 5000, 98765432198);
gerente.cadastrarSenha("123");



const cliente = new Cliente("Lais", 74185296321, "147");

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteLogado = SistemaAutenticacao.login(cliente, "147");

console.log(clienteLogado, diretorLogado, gerenteLogado);