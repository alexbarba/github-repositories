import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import { Layout } from 'components/common'
import { Home } from 'pages'

export const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/:username" component={Home} />
        <Route path="*">
          <Redirect to="/adamwathan" />
        </Route>
      </Switch>
    </Layout>
  </Router>
)
