import { fn } from '@storybook/test';
import { Header } from './Header';
var meta = {
    title: 'Example/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
};
export default meta;
export var LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
export var LoggedOut = {};
