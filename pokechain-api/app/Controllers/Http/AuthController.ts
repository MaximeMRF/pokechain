import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
    public async login ({ auth, request, response }: HttpContextContract) {
        const { email, password } = request.all()
        const user = await User.findBy('email', email)
        if (!user) {
            return response.status(401).json({ error: 'Unauthorized' })
        }
        const isValid = await Hash.verify(password, user.password)
        if (!isValid) {
            return response.status(401).json({ error: 'Unauthorized' })
        }
        const token = await auth.use('api').generate(user)
        return response.json({ token })
    }
    public async register ({ auth, request, response }: HttpContextContract) {
        const { email, password } = request.all()
        const user = await User.create({ email, password })
        const token = await auth.use('api').generate(user)
        return response.json({ token })
    }
}
