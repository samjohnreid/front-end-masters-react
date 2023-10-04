 const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ]);
 }

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet, {
                name: 'Archer',
                animal: 'Dog',
                breed: 'Shih Tzu',
            }),
            React.createElement(Pet, {
                name: 'Bird',
                animal: 'Pepper',
                breed: 'Cockatiel',
            }),
            React.createElement(Pet, {
                name: 'Cat',
                animal: 'Doink',
                breed: 'Mixed',
            }),
        ],
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));