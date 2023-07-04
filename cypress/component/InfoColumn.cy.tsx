import InfoColumn from '../../src/components/InfoColumn';

describe('<InfoColumn />', () => {
    beforeEach('Load fixture data', () => {
        cy.fixture('data').then(function (data) {
            this.data = data;
        });
    });
    it('render', function () {
        cy.mount(<InfoColumn data={this.data[0]} />);
    });
    it('Title is displayed', function () {
        cy.mount(<InfoColumn data={this.data[0]} />);
        cy.get('.column__title').should('have.text', 'What to study');
    });
    it('Text is displayed', function () {
        cy.mount(<InfoColumn data={this.data[0]} />);
        cy.get('.column__text').should(
            'have.text',
            'We offer a range of high-quality courses, which include full-time, part-time, online and distance learning.'
        );
    });
});
