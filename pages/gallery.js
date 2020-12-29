import BaseLayout from '../components/layouts/baselayout';
import React from 'react';
import axios from 'axios';

class Gallery extends React.Component {
	static async getInitialProps() {
		let photos = [];
		try {
			const res = await axios.get(
				'https://jsonplaceholder.typicode.com/photos'
			);
			photos = await res.data;
		} catch (e) {
			console.error(e);
		}

		return { photos: photos.slice(0, 10) };
	}

	renderPhotos(photos) {
		return photos.map((photo) => <li key={photo.id}>{photo.id}</li>);
	}

	render() {
		const { photos } = this.props;
		console.log(photos);
		return (
			<BaseLayout>
				<h1>this is the Gallery page</h1>
				<ul>{this.renderPhotos(photos)}</ul>
			</BaseLayout>
		);
	}
}

export default Gallery;
