export default data = {
    restaurants:[
        {key:0,
            name:'Burguesão',
            rating:[5,3],
            type:[false,true,false,true,true],
            img:require('./img/burgues-safado.jpg'),
            reviews:[
                {key:0, namerev:'johnny', review:'sem gosto e caro naum gosto so aceita credito.'},
                {key:1, namerev:'busta', review:'tem q ser saudavel filho'}]
        },
        {key:1,
            name:'Yakuza',
            rating:[3,3],
            type:[true,false,false,true,true], img:require('./img/yakuza.jpg'),
            reviews:[
                {key:0, namerev:'formiga', review:'adoro gente sério mto bom'},
                {key:1, namerev:'kojima', review: '私はそれがとても好き'}]
        },
        {key:2,
            name:'Kanye',
            rating:[1,5],
            type:[true,true,true,true,true],
            img:require('./img/kanye.jpg'),
            reviews:[
                {key:0, namerev: 'Antonio', review: 'Cara gnt esse cara é top demais namoral como assim. Eu sei q to chovendo no molhado, mas ele merece.'},
                {key:1, namerev: 'Resto do Mundo', review: 'true dat review de cima.'},
                {key:2, namerev: 'Resto da Galaxia', review: 'põe true nisso.'},
                {key:3, namerev: 'Anthony Fandango', review: 'acho overrated, 6/10'},
            ]
        },
    ],

    places:[
        {key:0,
            name:'Nárnia',
            rating:[5,3],
            type:[false,true,false,true,true],
            img:require('./img/burgues-safado.jpg'),
            reviews:[
                {key:0, namerev:'johnny', review:'sem gosto e caro naum gosto so aceita credito.'},
                {key:1, namerev:'busta', review:'tem q ser saudavel filho'}]
        },
        {key:1,
            name:'Terraço CT',
            rating:[3,3],
            type:[true,false,false,true,true], img:require('./img/yakuza.jpg'),
            reviews:[
                {key:0, namerev:'formiga', review:'adoro gente sério mto bom'},
                {key:1, namerev:'kojima', review: '私はそれがとても好き'}]
        },
        {key:2,
            name:'Prefeitura',
            rating:[1,5],
            type:[true,true,true,true,true],
            img:require('./img/kanye.jpg'),
            reviews:[
                {key:0, namerev: 'Antonio', review: 'Cara gnt esse cara é top demais namoral como assim. Eu sei q to chovendo no molhado, mas ele merece.'},
                {key:1, namerev: 'Resto do Mundo', review: 'true dat review de cima.'},
                {key:2, namerev: 'Resto da Galaxia', review: 'põe true nisso.'},
                {key:3, namerev: 'Anthony Fandango', review: 'acho overrated, 6/10'},
            ]
        },
    ],

    teachers:[
        {key:0,
            name:'Cookie',
            img:require('./img/burgues-safado.jpg'),
        },
        {key:1,
            name:'Braffman',
            img:require('./img/burgues-safado.jpg'),
        },
        {key:2,
            name:'Abraão',
            img:require('./img/burgues-safado.jpg'),
        },
        {key:3,
            name:'Nuno',
            img:require('./img/burgues-safado.jpg'),
        },
    ],

    subjects:[
        {key:0,
            name:'Computador e Sociedade',
            codes:['COS444'],
            img:require('./img/burgues-safado.jpg'),
        },
        {key:1,
            name:'Arquitetura de Computadores',
            codes:['EEL773'],
            img:require('./img/burgues-safado.jpg'),
        },
        {key:2,
            name:'Sistemas Digitais',
            codes:['EEL543'],
            img:require('./img/burgues-safado.jpg'),
        },
        {key:3,
            name:'Cálculo III',
            codes:['MAC233'],
            img:require('./img/burgues-safado.jpg'),
        },
    ],

    subjects_teachers: [
        {key:0,
            subject:'Computador e Sociedade',
            teacher: 'Cookie',
            rating: [5,5],
            reviews:[
                {key:0, namerev:'joao', review:'usem roupas confortáveis'},
                {key:1, namerev:'busta', review:'gostei dos cookies'},
                {key:2, namerev:'antonio', review:'amei fazer o mvp'}]
        },
        {key:0,
            subject:'Cálculo III',
            teacher: 'Abraão',
            rating: [1,0],
            reviews:[
                {key:0, namerev:'anatoli', review:'nunca vi coordenador mais benevolente, melhor matéria'},
                {key:1, namerev:'joao', review:'nao fui nas aulas'},
                {key:2, namerev:'antonio', review:'explicava mal'}
            ]
        },
        {key:0,
            subject:'Cálculo III',
            teacher: 'Nuno',
            rating: [4,1],
            reviews:[
                {key:0, namerev:'josé', review:'desenhava hiperboloides interceptando conicas como ninguém'},
            ]
        },
        {key:0,
            subject:'Sistemas Digitais',
            teacher: 'Braffman',
            rating: [3,3],
            reviews:[
                {key:1, namerev:'busta', review:'meu prof favorito'},
            ]
        },
        {key:0,
            subject:'Arquitetura de Computadores',
            teacher: 'Braffman',
            rating: [4,2],
            reviews:[
                {key:0, namerev:'iuro', review:'no words to describe, just bytes'},
            ]
        },
    ]
};