import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-routes-adapter'
import { makeSingUpController } from '../factories/signup/signup-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSingUpController()))
}
