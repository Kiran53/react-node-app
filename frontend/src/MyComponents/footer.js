import React from 'react'

export const Footer = (props) => {
    let s={
        position: "relative",
        bottom: "0vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={s}>
            <p className="text-center">
                Copyright &copy; Me.com 
            </p>
        </footer>
    )
}
