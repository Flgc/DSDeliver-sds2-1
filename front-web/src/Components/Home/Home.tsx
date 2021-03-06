import './home.css';
// import Footer from '../Footer/Footer';
import { ReactComponent as DeliverImage } from './image-deliver.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='home-container'>
				<div className='home-content'>
					<div className='home-actions'>
						<h1 className='home-title'>Faça seu pedido que entregamos pra você!!</h1>
						<h3 className='home-subtitle'>
							Escolha o seu pedido e em poucos minutos levaremos na sua porta
						</h3>
						<Link to='/orders' className='home-btn-order'>
							Fazer pedido
						</Link>
					</div>
					<div className='home-image'>
						<DeliverImage />
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Home;
