const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');	/*Variable represents all elements with */

portfolioItems.forEach(portfolioItem => {										
	portfolioItem.addEventListener('mouseover', () => {
		portfolioItem.childNodes[1].classList.add('img-darken');				/*For each element the img-darken class will be added when the mouse is over it*/
	})

	portfolioItem.addEventListener('mouseout', () => {
		portfolioItem.childNodes[1].classList.remove('img-darken');				/*For each element the img-darken class will be removed when the mouse leaves its space*/
	})

});