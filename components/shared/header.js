import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
	render() {
		return (
			<>
				<Link href='/'>
					<a style={{'fontSize': '20px'}}>Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
				<Link href='/gallery'>
					<a>Gallery</a>
				</Link>
				<Link href='/locations'>
					<a>Locations</a>
				</Link>
				<Link href='/blog'>
					<a>Blog</a>
				</Link>
			</>
		);
	}
}

export default Header;
