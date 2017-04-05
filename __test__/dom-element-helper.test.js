const DomElementHelper = require('../js/dom-element-helper');
console.error = jest.fn();

test('adds the marquee element to after the clock element', () => {
    let marquee = document.getElementById('marquee'),
        clock = document.getElementById('clock');

    DomElementHelper.addAfter(marquee, clock);

    expect(clock.nextSibling).toBe(marquee);
});

test('adds the marquee element to an invalid element', () => {
    DomElementHelper.addAfter(document.getElementById('marquee'),
        document.getElementById('invalid'));

    expect(console.error).toHaveBeenCalled();
});

test('removes an element from the DOM', () => {
    DomElementHelper.remove(document.getElementById('clock'));

    expect(document.getElementById('clock')).toBeNull();
});

test('removes an invalid element', () => {
    DomElementHelper.remove(document.getElementById('invalid'));

    expect(console.error).toHaveBeenCalled();
});
