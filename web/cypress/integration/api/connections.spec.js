/// <reference types="Cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections Endpoint', () => {
    it('GET - obter total de conexões', () => {
        //http://localhost:3333/connections

        
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((Response => {
           expect(Response.status).to.equal(200)
           expect(Response.duration).lessThan(22)
           expect(Response.body)
           .to.have.property('total')
           .to.be.a('number')
           .greaterThan(5)

           expect(Response.body.total)
           .an('number')
           .satisfy((totalValue) => { return totalValue >= 5})

           expect(Response.headers)
            .to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')
        }))
        })
    });