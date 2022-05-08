import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import WalletValidator from 'App/Validators/WalletValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class WalletsController {
    public async index({ response }: HttpContextContract) {
        const { data } = await axios.get('https://api.starton.io/v2/wallet/', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': Env.get('STARTON_API_KEY'),
            },
        })
        return response.json(data)
    }
    public async add({ auth, request, response }: HttpContextContract) {
        const payload = await request.validate(WalletValidator)
        // create new wallet in the database and attach it to the user
        const wallet = await Database.transaction(async (trx) => {
            /**
             * When persisting relationships, we need to assign the transaction
             * instance to the top level model. All the relationship methods
             * will reference the same transaction instance.
             */
            auth.use('api').user!.useTransaction(trx)
      
            /**
             * Create wallet and link it with the currently logged in user.
             */
            const wallet = await auth.user!.related('wallets').create({
                address: payload.address,
            })

            return wallet
          })

        return response.json(wallet)
    }
}
