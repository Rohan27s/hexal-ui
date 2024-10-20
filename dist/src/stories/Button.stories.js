import { fn } from '@storybook/test';
import { Button } from './Button';
var meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
};
export default meta;
export var Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
export var Secondary = {
    args: {
        label: 'Button',
    },
};
export var Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export var Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
