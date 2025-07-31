import type { Route } from '.react-router/types/app/routes/root/+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

const HomePage = () => {
  return <div>New Home Page</div>
}

export default HomePage
