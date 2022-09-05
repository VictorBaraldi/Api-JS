import User from '../models/Users';

class UserController {
  async store(req, res) { // store cria o usuario
    try {
      const novoUser = await User.create(req.body);
      return res.json({ novoUser });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll(); // encontra todos usuarios
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) { // encontra 1 user pelo PK
    try {
      const { id } = req.params;
      const users = await User.findByPk(id); // primaryKey é o id do usuario
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const users = await User.findByPk(id); // primaryKey é o id do usuario
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await users.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const users = await User.findByPk(id); // primaryKey é o id do usuario
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await users.destroy(req.body);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // estamos importando estanciado pra pegar o objeto da classe
