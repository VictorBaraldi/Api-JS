import jwt from 'jsonwebtoken';
import User from '../models/Users';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) { return res.status(401).json({ errors: ['credenciais inválidas'] }); }

    const user = await User.findOne({ where: { email } });

    if (!user) { return res.status(401).json({ errors: ['Usuário não encontrado'] }); }

    if (!(await user.passwordIsValid(password))) { return res.status(401).json({ errors: ['Senha inválida'] }); }

    const token = jwt.sign({ user, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
