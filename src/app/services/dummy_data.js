angular.module('urbndex')
    .service('dummy_data', function() {
        return {
            fetchQuiz: function (i) {
                var index = i || 0;
                var quizData = [{
                    'photoSrc': 'https://placekitten.com/g/82/82',
                    'answer': 'Cat Lavinia',
                    'choices': [
                        { 
                            'name': 'Steve Miller',
                        },
                        { 
                            'name': 'Cat Lavinia',
                        },
                        { 
                            'name': 'Theresa Maida',
                        },
                        { 
                            'name': 'Kay Nothstein',
                        },
                    ]
                }, {
                    'photoSrc': 'https://placekitten.com/g/82/82',
                    'answer': 'Theresa Maida',
                    'choices': [
                        { 
                            'name': 'Jenn Lukas',
                        },
                        { 
                            'name': 'Rob Grabill',
                        },
                        { 
                            'name': 'Theresa Maida',
                        },
                        { 
                            'name': 'Finnigen Johnsen',
                        },
                    ]
                }];

                return quizData[index];
            },

            fetchProfile: function () {
                var profileData = {
                    'photoSrc': 'https://placekitten.com/g/82/82',
                    'name': 'cat lavinia',
                    'title': 'happiness engineer',
                    'dept': 'employee morale',
                    'level': '45',
                    'chevo_count': '438'
                };

                return profileData;
            },

            fetchUrbnDex: function () {
                var urbnDexData = {
                    cards: [
                    {
                        'photoSrc': '1_UOI_GrabillR1_LThumb.jpg',
                        'name': 'Rob Grabill',
                        'title': 'Product Manager',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '2_UOI_MaidaT1_LThumb.jpg',
                        'name': 'Theresa Maida',
                        'title': 'Creative Project Delivery Mgr',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '3_UOI_NothsteinK1_LThumb.jpg',
                        'name': 'Kay Nothstein',
                        'title': 'Project Manager Ecommerce',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '4_UOI_JohnsenA1_LThumb.jpg',
                        'name': 'Annaliese Johnsen',
                        'title': 'Project Manager',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '5_UOI_MillerSt1_LThumb.jpg',
                        'name': 'Stephen Miller',
                        'title': 'Senior Manager',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '6_UOI_InnesB1_LThumb.jpg',
                        'name': 'Brian Innes',
                        'title': 'Director of Web Production',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '7_UOI_laviniam1_LThumb.jpg',
                        'name': 'Matt Lavinia',
                        'title': 'Development Manager',
                        'dept': 'Anthropologie Web Production'
                        },
                    {
                        'photoSrc': '8_UOI_parkr1_LThumb.jpg',
                        'name': 'RayAna Park',
                        'title': 'Project Manager Digital',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '9_UOI_mairs1_LThumb.jpg',
                        'name': 'Steve Mair',
                        'title': 'Web Production Manager',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '10_UOI_RudiA1_LThumb.jpg',
                        'name': 'Andrew Rudi',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '11_UOI_LiC1_LThumb.jpg',
                        'name': 'Chunyin Li',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '12_UOI_FriedgenK1_LThumb.jpg',
                        'name': 'Katie Friedgen',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '13_UOI_HortonL1_LThumb.jpg',
                        'name': 'Louis Horton',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '14_UOI_KalayehM1_LThumb.jpg',
                        'name': 'Meina Kalayeh',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '15_UOI_BicknellT1_LThumb.jpg',
                        'name': 'Tom Bicknell',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '16_UOI_StonakerT1_LThumb.jpg',
                        'name': 'Tracy Stonaker',
                        'title': 'Front End Developer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '17_UOI_ThielP1_LThumb.jpg',
                        'name': 'Patrick Thiel',
                        'title': 'Quality Assurance Analyst',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '18_UOI_DrobatzA1_LThumb.jpg',
                        'name': 'Alyssa Drobatz',
                        'title': 'Temporary Employee',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '19_UOI_MallonD1_LThumb.jpg',
                        'name': 'David Mallon',
                        'title': 'Senior Web Producer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '20_UOI_ConnerS1_LThumb.jpg',
                        'name': 'Simone Conner',
                        'title': 'Web Producer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '21_UOI_SmithCr1_LThumb.jpg',
                        'name': 'Craig Smith',
                        'title': 'Web Producer',
                        'dept': 'Anthropologie Web Production'
                    },
                    {
                        'photoSrc': '22_UOI_MayerS1_LThumb.jpg',
                        'name': 'Samantha Mayer',
                        'title': 'Web Producer',
                        'dept': 'Anthropologie Web Production'
                    }
                    
                ]};

                return urbnDexData;
            },

            fetchStats: function () {
                var statsData = {
                    'photoSrc': 'https://placekitten.com/g/200/300',
                    'name': 'matt lavinia',
                    'title': 'happiness engineer',
                    'dept': 'employee morale',
                    'level': '45',
                    'chevos': {
                        'earned': [
                            {
                                name: 'chevo1',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'chevo2',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'chevo3',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'chevo4',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            }
                        ],
                        'unearned': [
                            {
                                name: 'chevo5',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'chevo6',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'chevo7',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'chevo8',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'chevo9',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            }
                        ]
                    }
                };

                return statsData;
            },
        };
});
