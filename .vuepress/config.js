module.exports = {
    title: 'JS Jeopardy',
    description: 'Game to test your js skills',
    themeConfig: {
        search: false,
        nav: [
            {text: 'Github Repo', link: 'https://github.com/thisdot/js-jeopardy'},
            {text: 'This Dot', link: 'https://www.thisdot.co/'},
        ],
        sidebar: {
            '/game/': [
                '',
                'angular',
                'vue',
                'react',
                'node',
                'webpack',
                'animaljokes',
                'devjokes',
                'devquestions',
                
            ]
        }
    }
}