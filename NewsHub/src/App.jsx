import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto flex-grow p-4">
          <h1 className="text-3xl font-bold text-center">Welcome to NewsApp</h1>
          <News />
          <p className="text-gray-600 text-center mt-2">Your trusted source for the latest news.</p>
        </main>
        <Footer />
      </div>
    )
  }
}
