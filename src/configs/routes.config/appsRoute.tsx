import Home from '@/views/Home'
import { Routes } from '../../@types/routes'
import Works from '@/views/Works'
import NotFound from '@/views/NotFound'
import CsgoMt from '@/views/Works/CsgoMt'

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
  {
    key: 'app.notFound',
    path: '*',
    component: <NotFound />,
  },
  {
    key: 'app.works.csgomt',
    path: '/works/csgomt',
    component: <CsgoMt />,
  },
]

export default appsRoute
