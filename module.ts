import { module } from '@prisma/composer'

import service from './src/service.ts'

export default module("personal-site", ({ provision }) => {
  provision(service, {
    id: 'web',
    deps: {},
  })
})
