import { SelectComponent } from './FormComponents'

export default {
    title : 'Form/Select',
    component : SelectComponent
}

const SelectTemplate = (args) => <SelectComponent {...args} />;

export const SelectSmall = SelectTemplate.bind({});
SelectSmall.args = {
    size :'small',
    label : 'Smaill',
    items: [
        {
            label : 'First',
            value : 1
        },
        {
            label : 'Second',
            value : 2
        },
        
    ],
};

export const SelectMedium = SelectTemplate.bind({});
SelectMedium.args = {
    size :'medium',
    items: [ {
        label : 'First',
        value : 1
    },
    {
        label : 'Second',
        value : 2
    },],
};
