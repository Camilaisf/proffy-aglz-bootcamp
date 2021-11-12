/// <reference types="Cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes Endpoint', () => {
    it('POST - cadastrarum novo professor', () => {
        //http://localhost:3333/connections

        
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Agilizei prof",
                "avatar":"https://www.google.com/imgres?imgurl=https%3A%2F%2Ffaatesp.com.br%2Fassets%2Fimg%2Fquem-somos%2Fdocentes%2Favt-f.jpg&imgrefurl=https%3A%2F%2Ffaatesp.com.br%2Fcorpo-docente.html&tbnid=ab_t6PFXDvZ69M&vet=10CAsQxiAoAWoXChMImLaovcGD9AIVAAAAAB0AAAAAEAc..i&docid=KsKF9tRglcbvkM&w=1876&h=2067&itg=1&q=avatar%20professora&ved=0CAsQxiAoAWoXChMImLaovcGD9AIVAAAAAB0AAAAAEAc",
                "whatsapp":"31999999999",
                "bio":"teste 1234",
                "subject":"Biologia",
                "cost":400,
                "schedule":[
                   {
                      "week_day":0,
                      "from":"08:00",
                      "to":"09:00"
                   }
                ]
             }
        }).then((Response => {
           expect(Response.status).to.equal(201)
           expect(Response.duration).lessThan(60)
           expect(Response.body[0])
           .to.have.property('class_id')
           .an('number')

           expect(Response.body[0].week_day)
           .an('number')
           .satisfy((totalValue) => { return totalValue >= 0})

           expect(Response.headers)
            .to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')
        }))
        })
    });