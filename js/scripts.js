// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	// Карусель проектов
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach(function (el, i) {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 22,
					slidesPerView: 3
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Галерея
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: true,
			speed: 500,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Объекты
	const objectsSliders = [],
		objects = document.querySelectorAll('.objects .swiper')

	objects.forEach(function (el, i) {
		el.classList.add('objects_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		objectsSliders.push(new Swiper('.objects_s' + i, options))
	})


	// Галерея
	const partnersSliders = [],
		partners = document.querySelectorAll('.partners .swiper')

	partners.forEach(function (el, i) {
		el.classList.add('partners_s' + i)

		let options = {
			loop: true,
			speed: 500,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		partnersSliders.push(new Swiper('.partners_s' + i, options))
	})


	// Страница товара
	const productInfoSliders = [],
		productInfo = document.querySelectorAll('.product_info .images .swiper')

	productInfo.forEach(function (el, i) {
		el.classList.add('product_info_s' + i)

		let options = {
			loop: false,
			speed: 500,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		productInfoSliders.push(new Swiper('.product_info_s' + i, options))
	})


	// Страница статьи
	const articleInfoSliders = [],
		articleInfo = document.querySelectorAll('.article_info .images .swiper')

	articleInfo.forEach(function (el, i) {
		el.classList.add('article_info_s' + i)

		let options = {
			loop: false,
			speed: 500,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		articleInfoSliders.push(new Swiper('.article_info_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click(e => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Выбор файла
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}
})