import User from '../models/Users';

class UserController {
  async store(req, res) { // store cria o usuario
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // encontra todos usuarios e so mostra os dados dentro do attributes
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) { // encontra 1 user pelo PK
    try {
      const users = await User.findByPk(req.params.id); // primaryKey é o id do usuario
      const { id, nome, email } = users;
      return res.json({ id, nome, email }); // mostra so isso
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const users = await User.findByPk(req.userId); // primaryKey é o id do usuario
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await users.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const users = await User.findByPk(req.userId); // primaryKey é o id do usuario
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await users.destroy(req.body);
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // estamos importando estanciado pra pegar o objeto da classe
