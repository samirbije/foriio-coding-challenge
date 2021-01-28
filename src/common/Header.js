import React from 'react';

const Header = () => (
	<header>
		<nav className="navbar navbar-inverse" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="/pages/users"><strong>  Users </strong></a>
				</div>
			</div>
		</nav>
	</header>
)

export default Header;