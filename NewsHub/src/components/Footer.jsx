import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-blue-600 text-white text-center p-4 mt-4">
            <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} NewsApp. All Rights Reserved.</p>
            <div className="mt-2">
                <a href="#" className="text-white hover:text-white mx-2">Privacy Policy</a>
                <a href="#" className="text-white hover:text-white mx-2">Terms of Service</a>
            </div>
            </div>
        </footer>
    )
  }
}
