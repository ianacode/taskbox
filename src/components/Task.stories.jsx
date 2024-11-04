import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs']
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/UHSeHxWPadgaLjizifdzqn/Storybook-Chromatic-Test?node-id=8-5&t=2gMYdtohU4W2rXtB-1'
        }
    }
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state:'TASK_PINNED',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/UHSeHxWPadgaLjizifdzqn/Storybook-Chromatic-Test?node-id=8-12&t=2gMYdtohU4W2rXtB-1'
        }
    }
};

export const Archive = {
    args: {
        task: {
            ...Default.args.task,
            state:'TASK_ARCHIVED',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/UHSeHxWPadgaLjizifdzqn/Storybook-Chromatic-Test?node-id=8-13&t=2gMYdtohU4W2rXtB-1'
        }
    }
};


