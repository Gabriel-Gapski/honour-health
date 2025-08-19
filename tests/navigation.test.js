/**
 * @jest-environment jsdom
 */

const { showSection } = require('../navigation');

describe('showSection', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <nav>
                <span id="nav-home" class="nav-item active">Home</span>
                <span id="nav-about" class="nav-item">About</span>
            </nav>
            <section id="home" class="section active"></section>
            <section id="about" class="section"></section>
        `;
        window.scrollTo = jest.fn();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('activates the correct section and nav item while deactivating others', () => {
        const navAbout = document.getElementById('nav-about');
        const event = { target: navAbout };

        showSection(event, 'about');

        expect(document.getElementById('home').classList.contains('active')).toBe(false);
        expect(document.getElementById('about').classList.contains('active')).toBe(true);
        expect(document.getElementById('nav-home').classList.contains('active')).toBe(false);
        expect(navAbout.classList.contains('active')).toBe(true);
    });
});
