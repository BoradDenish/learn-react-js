import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold" href="#">NewsApp</a>
                <button className="md:hidden block text-white focus:outline-none">
                    ☰
                </button>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">Categories</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
  }
}
