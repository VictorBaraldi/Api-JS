import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'victor',
      sobrenome: 'baraldi',
      email: 'victor_baraldi@hotmail.com',
      idade: 24,
      peso: 75,
      altura: 2,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController(); // estamos importando estanciado pra pegar o objeto da classe
