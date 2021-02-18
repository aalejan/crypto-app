import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link className="text-decoration-none" to="/">
                <h1 className="text-center text-warning mt-3 mb-5">
                    <span className="text-white">Coin</span>
                    <span className="bg-warning text-dark rounded p-1">Hub</span>
                </h1>
            </Link>
        </div>
    )
}
export default Header