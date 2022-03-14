import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/">
						E-Commerce
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarColor02"
						aria-controls="navbarColor02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/*
						CartWidget!
					
						{cart.length === 0 ? <></> : <CartWidget />} */}

					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<Link to="/category/narguilas" className="nav-link">
								Narguilas
							</Link>
							<Link to="/category/tabacos" className="nav-link">
								Tabacos
							</Link>
							<Link to="/category/carbones" className="nav-link">
								Carbones
							</Link>
							<Link to="/category/accesorios" className="nav-link">
								Accesorios
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
