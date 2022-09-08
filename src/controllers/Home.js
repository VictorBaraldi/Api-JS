class HomeController {
  async index(req, res) {
    res.json(
      'Index',
    );
  }
}

export default new HomeController(); // estamos importando estanciado pra pegar o objeto da classe
