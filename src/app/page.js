'use client'
import { Provider } from 'react-redux'
import Header from "./components/header"
import Main from "./components/main"
import store from './redux/store'

export default function Home() {

  return (
    <Provider store={store}>
      <Header />  
      <Main />
    </Provider>
  )
}
