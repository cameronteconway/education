import Stat from '../../src/components/Stat';

describe('<Stat />', () => {
    beforeEach('Load fixture data', () => {
        cy.fixture('data').then(function (data) {
            this.data = data;
        });
    });
    it('render', function () {
        cy.mount(<Stat data={this.data[1]} />);
    });
    it('Stat is displayed', function () {
        cy.mount(<Stat data={this.data[1]} />);
        cy.get('.stat__title').should('have.text', '94%');
    });
    it('Text is displayed', function () {
        cy.mount(<Stat data={this.data[1]} />);
        cy.get('.stat__text').should('have.text', 'student satisfaction');
    });
});
