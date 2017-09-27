import React from 'react';
import {SubmitButton} from '../sign_up/SubmitButton';
import {SimpleCounter} from "../counter/Counter";
import {Table} from "../components/Table";


// discover components in a module
// wrap it all up as a component <Styleguide modules={['src/components', 'src/ui']} />
// allow to style with embedded styles
// allow to turn off embedded styles
// add custom name
// add categories so that you can create groups


// How can we add font styles?
// How can we add Colors?

const Example = ({component, exampleName, description}) => {
    const Component = component;
    const props = component.styleguide.examples[exampleName];
    const propsAttrs = Object.entries(props).map(([propName, propValue]) => `${propName}={${JSON.stringify(propValue)}}`).join(' ');
    const snippet = `<${component.name} ${propsAttrs} />`;
    return (
        <div>
            <h4>{exampleName}</h4>
            <p>{description}</p>
            <Component {...props} />
            <pre>
            {snippet}
        </pre>
        </div>
    );
};

const renderExamples = (Component) => {
    const examples = Component.styleguide.examples;
    return (
        <div key={Component.name}>
            <Title title={Component.name}/>
            {Object.keys(examples).map(name => (
                <Example key={name} component={Component} exampleName={name}/>
            ))}
        </div>
    )
};

const Title = ({title}) => {

    return <h2>{title}</h2>
}

export const Styleguide = () => {

    const components = [SubmitButton, Table, SimpleCounter];

    return <div style={styles.root}>
        <div style={styles.navigation}>
            <h3>Components</h3>
            <ul style={styles.navigationList}>
                { components.map(component => <li style={styles.navigationItem} key={component.name}>{component.name}</li>) }
            </ul>
        </div>

        <div style={styles.content}>
            <h1>Styleguide</h1>

            { components.map(component => renderExamples(component)) }

        </div>

    </div>;
}


const styles = {

    root: {
        display: 'flex',
        height: '100%',
        fontFamily: 'Helvetica, sans-serif'
    },

    navigation: {
        backgroundColor: '#f5f6f7',
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        margin: '0',
        color: '#333',
        minWidth: 200,
    },

    navigationList: {
        listStyleType: 'none',
        padding: 0
    },

    navigationItem: {
        paddingBottom: 8,
    },

    content: {
        paddingLeft: 16,
    }


};