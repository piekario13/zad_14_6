var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('Metoda ustawia domyślne wartości propsów, które nie zostały przekazane do komponentu');
    },

    componentWillMount: function() {
        console.log('Metoda wywoływana raz przed pierwszym uruchomieniem, zmiana stanu w tej fazie nie powoduje przerenderowania komponentu');
    },

    componentDidMount: function() {
        console.log('Metoda wywoływana raz po pierwszym uruchomieniu, w tym etapie komponent ma już swoją prezentację w DOM, więc można z niej korzystać');
    },

    componentWillReceiveProps: function() {
        console.log('metoda wywoływana, gdy komponent otrzyma nowe właściwości, które są przekazywane jako argument tej metody i dzięki temu możemy je porównać z wcześniejszymi i wykonać odpowiednie akcje');
    },

    shouldComponentUpdate: function() {
        console.log('Metoda powinna zwrócić true lub false, w zależności od tego, czy chcemy aby komponent mógł się zmienić wraz z otrzymaniem nowych własności.');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Metoda działa analogicznie do copmonentWillMount');
    },

    componentDidUpdate: function() {
        console.log('Metoda działa analogicznie do componentDidMount() wywoływana po update’cie komponentu, tu jednak jako argumenty przekazywane są poprzednie wartości props i state');
    },

    componentWillUnmount: function() {
        console.log('w tej metodzie można dokonać porządków, na przykład poprzez usunięcie Listenerów');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {
                style: {margin: '20px 0 20px 10px', color: 'blue'}
                }, 'Licznik ' + this.state.counter),
            React.createElement('button', {
                onClick: this.increment, 
                className: 'btn btn-primary btn-lg',
                style: {margin: '0 5px 0 10px'}
            }, 'Increment'),
            React.createElement('button', {
                onClick: this.decrement,
                className: 'btn btn-secondary btn-lg'
            }, 'Decrement')
        );
    }
});

var element = 
    React.createElement('div', {},
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter)
    );

                
ReactDOM.render(element, document.getElementById('app'));