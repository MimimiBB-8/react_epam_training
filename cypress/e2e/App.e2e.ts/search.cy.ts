/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('.type() - type into a DOM element', () => {
        cy.get('input[type="search"]')
            .type('coco').should('have.value', 'coco')
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')
            .type('{alt}{option}')
            .type('{ctrl}{control}')
            .type('{shift}')
    })

    it('.submit() - submit a form', () => {
        cy.get('form')
            .find('[type="search"]').type('coco')
        cy.get('form').submit().get('div').should('have.class', 'Moviegallery_movie_gallery__PuA7+').children('.MovieCard_movie_card__Vs4MK')
        cy.get('div').should('have.class', 'Moviegallery_movie_gallery__PuA7+').children('.MovieCard_movie_card__Vs4MK').should('have.length', '2')
        cy.get('.MovieCard_movie_card__Vs4MK')
        .each(($div) => { 
            cy.get('.MovieCard_movie_card__Vs4MK').eq(0).within(() => {
                cy.get('img').should('have.attr', 'alt', 'Coco')
                cy.get('h4').should('have.text', 'Coco')
                cy.get('.MovieCard_movie_genre__OShYx').should('have.text', 'Adventure, Comedy, Family, Animation')
              })
              cy.get('.MovieCard_movie_card__Vs4MK').eq(1).within(() => {
                cy.get('img').should('have.attr', 'alt', 'Cocoon')
                cy.get('h4').should('have.text', 'Cocoon')
                cy.get('p.MovieCard_movie_genre__OShYx').should('have.text', 'Comedy, Drama, Science Fiction')
              })
        })
    })
})
