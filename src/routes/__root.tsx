import { Outlet, createRootRoute } from '@tanstack/react-router'

import { Layout } from '../components/Layout'

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
})

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

function NotFound() {
  return (
    <div className="section">
      <div className="wrap">
        <h1>This page is missing</h1>
        <p>
          The address you typed does not match anything on this site. The pages
          below will get you back on track.
        </p>
        <div className="action-row">
          <a className="btn btn-primary" href="/">
            Go home
          </a>
          <a className="btn btn-ghost" href="/contact">
            Contact us
          </a>
        </div>
      </div>
    </div>
  )
}
