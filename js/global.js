let projects = [
    {
        id: 1,
        name: 'vueblogger-plus-sys',
        desc: '在vueblogger的基础上,增加了后台代码,移动终端控制,以及各种自定义组件,算是自己了解的技术栈的整合',
        link: 'https://blog.qnmdmyy.top',
        time: '2024-03-04',
        techs: [
            'Vue2',
            'Node.js',
            'egg.js',
            'uniapp',
            'springboot'
        ],
        cover: 'https://cdn.jsdelivr.net/gh/RecklessZhang/vueblogger-plus-drawbed/vueblogger-plus/project/vueblogger-plus.png',
        screenShots: [
            './img/screenshots/vueblogger-plus-sys/img.png',
            './img/screenshots/vueblogger-plus-sys/img.png1',
            './img/screenshots/vueblogger-plus-sys/img.png2',
            './img/screenshots/vueblogger-plus-sys/img.png3',
            './img/screenshots/vueblogger-plus-sys/img.png4'
        ]
    }
]

function renderProjects() {
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let figureElement = document.createElement('figure');
        figureElement.classList.add('item', 'standard');

        let dataGroups = ['category_all'];
        for (let j = 0; j < project.techs.length; j++) {
            let tech = project.techs[j];
            let categoryClass = 'category_' + tech;
            dataGroups.push(categoryClass);
        }
        figureElement.setAttribute('data-groups', JSON.stringify(dataGroups));

        let divElement = document.createElement('div');
        divElement.classList.add("portfolio-item-img");
        let imgElement = document.createElement('img');
        imgElement.src = project.cover;
        let aElement = document.createElement('a');
        aElement.href = 'project-detail.html?id=' + project.id;
        aElement.classList.add('ajax-page-load');
        divElement.append(imgElement, aElement);

        let iElement = document.createElement('i');
        iElement.classList.add('far', 'fa-file-alt');
        let h4Element = document.createElement('h4');
        h4Element.classList.add('name');
        h4Element.innerText = project.name;
        let spanElement = document.createElement('span');
        spanElement.classList.add('category');
        spanElement.innerText = project.time;

        figureElement.append(divElement, iElement, h4Element, spanElement);

        document.getElementById('project-grid').append(figureElement);
    }
}
