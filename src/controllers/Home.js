class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController(); // estamos importando estanciado pra pegar o objeto da classe
