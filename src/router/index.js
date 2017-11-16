import ORouter from '../utils/oRouter'
import Root from '../components/OWF/views/Root'
import routes from '../components/OWF/routes'

const aRouter = new ORouter(Root, routes.login, routes.logout, routes.notFound).addORoutes({home: routes.home})
export default aRouter
