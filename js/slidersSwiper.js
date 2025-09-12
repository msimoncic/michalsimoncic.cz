const upgradeContainerToSwiper = (container, { withNavigation = false, withPagination = false } = {}) => {
	if (!container) return false
	if (container.dataset.swiperInit === '1') return true

	const hasWrapper = !!container.querySelector(':scope > .swiper-wrapper')
	if (!hasWrapper) {
		const wrapper = document.createElement('div')
		wrapper.className = 'swiper-wrapper'

		const frag = document.createDocumentFragment()
		const children = Array.from(container.children)

		for (const child of children) {
			child.classList.add('swiper-slide')
			frag.appendChild(child)
		}

		wrapper.appendChild(frag)
		container.appendChild(wrapper)
	} else {
		const slides = container.querySelectorAll(':scope > .swiper-wrapper > *')
		slides.forEach((s) => s.classList.add('swiper-slide'))
	}

	container.classList.add('swiper')

	if (withNavigation && !container.querySelector(':scope > .swiper-button-prev')) {
		const prev = document.createElement('div')
		prev.className = 'swiper-button-prev'
		const next = document.createElement('div')
		next.className = 'swiper-button-next'
		container.appendChild(prev)
		container.appendChild(next)
	}

	if (withPagination && !container.querySelector(':scope > .swiper-pagination')) {
		const pag = document.createElement('div')
		pag.className = 'swiper-pagination'
		container.appendChild(pag)
	}

	container.dataset.swiperInit = '1'
	return true
}

const getBaseSwiperOptions = ({ withNavigation = false, withPagination = false } = {}) => {
	const base = {
		slidesPerView: 'auto',
		spaceBetween: 16,
		loop: true,
		// preloadImages: false,
		// lazy: { enabled: true },
		// watchSlidesProgress: true,
	}

	if (withNavigation) {
		base.navigation = {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	}
	if (withPagination) {
		base.pagination = { el: '.swiper-pagination', clickable: true }
	}

	return base
}

const referenceSlider = () => {
	const el = document.querySelector('.about__reference')
	if (!el) return
	upgradeContainerToSwiper(el, {
		withNavigation: true,
		withPagination: false,
	})
	const swiper = new window.Swiper(el, getBaseSwiperOptions({ withNavigation: true }))
	return swiper
}

const projectsSlider = () => {
	const el = document.querySelector('.projects__slider')
	if (!el) return
	upgradeContainerToSwiper(el, { withNavigation: true, withPagination: false })
	const swiper = new window.Swiper(el, getBaseSwiperOptions({ withNavigation: true }))
	return swiper
}

export { referenceSlider, projectsSlider }
