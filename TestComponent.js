window.reactComponents.TestComponent = (function () {

    var divStyle = {
        color: 'blue'
    };

    var TestComponent = React.createClass({
        displayName: 'TestComponent',


        render: function render() {
            return React.createElement(
                'header',
                { style: divStyle },
                React.createElement(
                    'h1',
                    null,
                    'My first React Component'
                )
            );
        }
    });

    return TestComponent;
}());
