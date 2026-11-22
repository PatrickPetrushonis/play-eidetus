import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const HOME_PATHS = ['/', '/index.html']

const App = () => {
  if (HOME_PATHS.includes(window.location.pathname)) {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }

  return (
    <Layout headerClass="header--alt" homePath="/">
      <NotFound />
    </Layout>
  )
}

export default App
