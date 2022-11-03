import logo from './assets/logo.svg'
import basket from './assets/basket.png'
import ginger from './assets/ginger.png'
import nootris from './assets/nootris.png'
import virus from './assets/virus.png'
import product from './assets/product.png'
import './App.scss'

function App() {

	return (
		<div className="App">
			<header className='header wrapper'>
				<a className='link'><img src={logo} /></a>
				<nav className='nav'>
					<ul className='nav__list'>
						<li><a className='link' href="#">FAQ</a></li>
						<li><a className='link' href="#">Оплата и доставка</a></li>
						<li><a className='link' href="#">Возврат</a></li>
						<li><a className='link' href="#">Исследования</a></li>
						<li><a className='link' href="#">Личный кабинет</a></li>
						<li><a className='link' href="#">8(800)600-09-90</a></li>
						<li><a className='link' href="#"><img src={basket} /></a></li>
					</ul>
				</nav>
			</header>
			<main>
				<section className='bg_settings'>
					<div className='wrapper wrapper__main_ad'>
						<h1 className='main_ad__h1'>АКТИВИРУЙ<br /> ИММУНИТЕТ!</h1>
						<p className='main_ad__p_bigger'>Всего пять секунд в день помогут укрепить иммунитет<br />и повысить защитные силы организма</p>
						<img className='main_ad__product_img' src={product} />
						<h3 className='main_ad__h3'>NOOTRIS ПОМОГАЕТ</h3>
						<p className='main_ad__p'>Вашему организму во время пандемии<br />и сезонных простуд</p>
					</div>
				</section>

				<section className='main_ad'>
					<div className='wrapper wrapper__main_ad'>
						<h1 className='main_ad__h1'>АКТИВИРУЙ<br /> ИММУНИТЕТ!</h1>
						<p className='main_ad__p_bigger'>Всего пять секунд в день помогут укрепить иммунитет<br />и повысить защитные силы организма</p>
						<img className='main_ad__product_img' src={product} />
						<h3 className='main_ad__h3'>NOOTRIS ПОМОГАЕТ</h3>
						<p className='main_ad__p'>Вашему организму во время пандемии<br />и сезонных простуд</p>
					</div>
				</section>

				<section className='main_order wrapper wrapper__main_order'>
					<h2 className='main_order__h2'><span>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</span><br /><span className='main_order__h2_span'>СО СКИДКОЙ -15% ПЕРВЫМ!</span></h2>
					<p className='main_order__price'><span className='main_order__old_price'>750₽</span>690₽</p>
					<div className='benefits'>
						<div className='benefit'>
							<img src={ginger} />
							<p>Содержит<br /><span className='main_order__span'>имбирь</span></p>
						</div>
						<div className='benefit'>
							<img src={nootris} />
							<p className='main_order__p_bigger'>+ Бесплатная доставка<br /><span className='main_order__span text_special'>Специальная цена</span></p>
						</div>
						<div className='benefit'>
							<img src={virus} />
							<p>Нейтрализует<br /><span className='main_order__span'>вирусы</span></p>
						</div>
					</div>
					<a><button className='button_order'>Оформить заказ!</button></a>
				</section>
			</main>
		</div>
	)
}

export default App
