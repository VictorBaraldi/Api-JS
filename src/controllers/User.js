import User from '../models/Users';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json({
        novoUser,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // estamos importando estanciado pra pegar o objeto da classe
