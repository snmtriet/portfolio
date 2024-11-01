import Home from '@/views/Home'
import { Routes } from '../../@types/routes'
import Works from '@/views/Works'

const appsRoute: Routes = [
  {
    key: 'app.homepage',
    path: '/',
    component: <Home />,
  },
  {
    key: 'app.works',
    path: '/works',
    component: <Works />,
  },
]

export default appsRoute
