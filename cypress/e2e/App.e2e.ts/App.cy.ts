
describe('rendering app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('loading', () => {
    cy.request({
      url: 'http://localhost:4000/movies?limit=9?',
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })

  })
  it('header component', () => {
    cy.get('header').within(($header) => {
      cy.get('label').should('have.text', 'netflixroulette')
      cy.get('button').should('have.class', 'Button_add_movie__r2vPF')
      cy.get('h2').should('have.text', 'FIND YOUR MOVIE')
      cy.get('form').within(($form) => {
        cy.get('input[type="search"]').should('have.value', '')
        cy.get('button[type="submit"]').should('have.text', 'search')
      })
    })
  })
  it('main component', () => {
    cy.get('main').within(($main) => {
      cy.contains('all')
        .parent('ul')
        .within(() => {
          cy.get('li').eq(1).contains('action')
          cy.get('li').eq(2).contains('comedy')
          cy.get('li').eq(3).contains('horror')
          cy.get('li').eq(4).contains('crime')
        })
      cy.get('select').select(1).should('have.value', 'release_date_asc')
      cy.get('select').select(2).should('have.value', 'release_date_des')
      cy.get('select').select(3).should('have.value', 'vote_average_asc')
      cy.get('select').select(4).should('have.value', 'vote_average_desc')
      cy.get('div').should('have.class', 'Moviegallery_movie_gallery__PuA7+').children('div.MovieCard_movie_card__Vs4MK').should('have.length', 9)
      cy.get('div.MovieCard_movie_card__Vs4MK')
        .first()
        .within(($div) => { 
          cy.get('img')
          cy.get('h4')
          cy.get('p').should('have.class', 'MovieCard_movie_year__jE+vP')
          cy.get('p').should('have.class', 'MovieCard_movie_genre__OShYx')
        })
    })
  })
  it('footer component', () => {
    cy.get('footer').within(($footer) => {
      cy.get('p').should('have.text', 'netflixroulette')
    })
  })
})
