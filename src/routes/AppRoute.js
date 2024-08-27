import Login from "../pages/Login"
import Dasboard from "../pages/Dashboar"
import Setting from "../pages/Setting"
import Group from "../pages/Group"
import Event from "../pages/Event"
import ThreeColumnLayout from '../layouts/ThreeColumnLayout'

import RoutePath from "./RoutePath"
import MainLayout from "../layouts/MainLayout"
import TwoColumnLayout from "../layouts/TwoColumnLayout"





const publishRoutes = [
    { path: RoutePath.LOGIN, component: Login, layout: null },
    { path: RoutePath.DASHBOARD, component: Dasboard, layout: ThreeColumnLayout },
  
    { path: RoutePath.SETTING, component: Setting, layout: MainLayout },
]
const privateRoutes = [
    { path: RoutePath.GROUP, component: Group, layout: TwoColumnLayout },
    { path: RoutePath.EVENT, component: Event, layout: null },
]

export { publishRoutes, privateRoutes }