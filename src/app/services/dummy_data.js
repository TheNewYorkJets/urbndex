angular.module('urbndex')
    .service('dummy_data', function() {

        var urbnDexData = {
            cards: [
            {
                'id': '1',
                'photoSrc': '1_UOI_GrabillR1_LThumb.jpg',
                'name': 'Rob Grabill',
                'title': 'Product Manager',
                'dept': 'Anthropologie Web Production',
                'level': '2',
                'cheevo_count': '234',
                'bio': {
                    'question': [
                        {
                            quest: 'What state did you grow up in?',
                            ans: 'The magical state of Pennsylvania.'
                        },
                        {
                            quest: 'What state do you reside in now?',
                            ans: 'The magical state of Pennsylvania.'
                        },
                        {
                            quest: 'Which URBN dog is your favorite?',
                            ans: 'Finnegan and Buster, of course!'
                        },
                        {
                            quest: 'What is your go-to 543 lunch?',
                            ans: 'Grilled chicken sandwich with fries and a gingerale.'
                        },
                    ]
                }
            },
            {
                'id': '2',
                'photoSrc': '2_UOI_MaidaT1_LThumb.jpg',
                'name': 'Theresa Maida',
                'title': 'Creative Project Delivery Mgr',
                'dept': 'Anthropologie Web Production',
                'level': '7',
                'cheevo_count': '435',
                'bio': {
                    'question': [
                        {
                            quest: 'What state did you grow up in?',
                            ans: 'The magical state of Pennsylvania.'
                        },
                        {
                            quest: 'What state do you reside in now?',
                            ans: 'The magical state of Pennsylvania.'
                        },
                        {
                            quest: 'Which URBN dog is your favorite?',
                            ans: 'Finnegan and Buster, of course!'
                        },
                        {
                            quest: 'What is your go-to 543 lunch?',
                            ans: 'Grilled chicken sandwich with fries and a gingerale.'
                        },
                    ]
                }
            },
            {
                'id': '3',
                'photoSrc': '3_UOI_NothsteinK1_LThumb.jpg',
                'name': 'Kay Nothstein',
                'title': 'Project Manager Ecommerce',
                'dept': 'Anthropologie Web Production',
                'level': '4',
                'cheevo_count': '322'
            },
            {
                'id': '4',
                'photoSrc': '4_UOI_JohnsenA1_LThumb.jpg',
                'name': 'Annaliese Johnsen',
                'title': 'Project Manager',
                'dept': 'Anthropologie Web Production',
                'level': '1',
                'cheevo_count': '43'
            },
            {
                'id': '5',
                'photoSrc': '5_UOI_MillerSt1_LThumb.jpg',
                'name': 'Stephen Miller',
                'title': 'Senior Manager',
                'dept': 'Anthropologie Web Production',
                'level': '3',
                'cheevo_count': '234'
            },
            {
                'id': '6',
                'photoSrc': '6_UOI_InnesB1_LThumb.jpg',
                'name': 'Brian Innes',
                'title': 'Director of Web Production',
                'dept': 'Anthropologie Web Production',
                'level': '5',
                'cheevo_count': '432'
            },
            {
                'id': '7',
                'photoSrc': '7_UOI_laviniam1_LThumb.jpg',
                'name': 'Matt Lavinia',
                'title': 'Development Manager',
                'dept': 'Anthropologie Web Production',
                'level': '8',
                'cheevo_count': '567'
                },
            {
                'id': '8',
                'photoSrc': '8_UOI_parkr1_LThumb.jpg',
                'name': 'RayAna Park',
                'title': 'Project Manager Digital',
                'dept': 'Anthropologie Web Production',
                'level': '4',
                'cheevo_count': '345'
            },
            {
                'id': '9',
                'photoSrc': '9_UOI_mairs1_LThumb.jpg',
                'name': 'Steve Mair',
                'title': 'Web Production Manager',
                'dept': 'Anthropologie Web Production',
                'level': '5',
                'cheevo_count': '422'
            },
            {
                'id': '10',
                'photoSrc': '10_UOI_RudiA1_LThumb.jpg',
                'name': 'Andrew Rudi',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '3',
                'cheevo_count': '298'
            },
            {
                'id': '11',
                'photoSrc': '11_UOI_LiC1_LThumb.jpg',
                'name': 'Chunyin Li',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '2',
                'cheevo_count': '198'
            },
            {
                'id': '12',
                'photoSrc': '12_UOI_FriedgenK1_LThumb.jpg',
                'name': 'Katie Friedgen',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '1',
                'cheevo_count': '23'
            },
            {
                'id': '13',
                'photoSrc': '13_UOI_HortonL1_LThumb.jpg',
                'name': 'Louis Horton',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '0',
                'cheevo_count': '0'
            },
            {
                'id': '14',
                'photoSrc': '14_UOI_KalayehM1_LThumb.jpg',
                'name': 'Meina Kalayeh',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '',
                'cheevo_count': ''
            },
            {
                'id': '15',
                'photoSrc': '15_UOI_BicknellT1_LThumb.jpg',
                'name': 'Tom Bicknell',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '4',
                'cheevo_count': '312'
            },
            {
                'id': '16',
                'photoSrc': '16_UOI_StonakerT1_LThumb.jpg',
                'name': 'Tracy Stonaker',
                'title': 'Front End Developer',
                'dept': 'Anthropologie Web Production',
                'level': '3',
                'cheevo_count': '234'
            },
            {
                'id': '17',
                'photoSrc': '17_UOI_ThielP1_LThumb.jpg',
                'name': 'Patrick Thiel',
                'title': 'Quality Assurance Analyst',
                'dept': 'Anthropologie Web Production',
                'level': '2',
                'cheevo_count': '234'
            },
            {
                'id': '18',
                'photoSrc': '18_UOI_DrobatzA1_LThumb.jpg',
                'name': 'Alyssa Drobatz',
                'title': 'Temporary Employee',
                'dept': 'Anthropologie Web Production',
                'level': '1',
                'cheevo_count': '10'
            },
            {
                'id': '19',
                'photoSrc': '19_UOI_MallonD1_LThumb.jpg',
                'name': 'David Mallon',
                'title': 'Senior Web Producer',
                'dept': 'Anthropologie Web Production',
                'level': '5',
                'cheevo_count': '430'
            },
            {
                'id': '20',
                'photoSrc': '20_UOI_ConnerS1_LThumb.jpg',
                'name': 'Simone Conner',
                'title': 'Web Producer',
                'dept': 'Anthropologie Web Production',
                'level': '2',
                'cheevo_count': '134'
            },
            {
                'id': '21',
                'photoSrc': '21_UOI_SmithCr1_LThumb.jpg',
                'name': 'Craig Smith',
                'title': 'Web Producer',
                'dept': 'Anthropologie Web Production',
                'level': '10',
                'cheevo_count': '1000'
            },
            {
                'id': '22',
                'photoSrc': '22_UOI_MayerS1_LThumb.jpg',
                'name': 'Samantha Mayer',
                'title': 'Web Producer',
                'dept': 'Anthropologie Web Production',
                'level': '2',
                'cheevo_count': '156'
            }
            
        ]};

        return {
            fetchQuiz: function (i) {

                var choices = _.sample(urbnDexData.cards, 4);
                var card = _.sample(choices, 1)[0];
                var question = {
                    'answer': card,
                    'choices': choices
                };

                return question;
            },

            fetchProfile: function (id) {
                var profileData = _.find(urbnDexData.cards, { id: id});

                return profileData;
            },

            fetchUrbnDex: function () {
                return urbnDexData;
            },

            fetchStats: function () {
                var statsData = {
                    'photoSrc': '7_UOI_laviniam1_LThumb.jpg',
                    'name': 'Matt Lavinia',
                    'title': 'Happiness Engineer',
                    'dept': 'Employee Morale',
                    'level': '45',
                    'cheevos': {
                        'earned': [
                            {
                                name: 'cheevo1',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo2',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo3',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo4',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo5',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo6',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo7',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            },
                            {
                                name: 'cheevo8',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-155_award_achievement_star-128.png'
                            }
                        ],
                        'unearned': [
                            {
                                name: 'uncheevo1',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo2',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo3',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo4',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo5',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo6',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo7',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo8',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo9',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            },
                            {
                                name: 'uncheevo10',
                                img: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-153_award_achievement-128.png'
                            }
                        ]
                    },
                    'bio': {
                        'question': [
                            {
                                quest: 'What state did you grow up in?',
                                ans: 'The magical state of Pennsylvania.'
                            },
                            {
                                quest: 'What state do you reside in now?',
                                ans: 'The magical state of Pennsylvania.'
                            },
                            {
                                quest: 'Which URBN dog is your favorite?',
                                ans: 'Finnegan and Buster, of course!'
                            },
                            {
                                quest: 'What is your go-to 543 lunch?',
                                ans: 'Grilled chicken sandwich with fries and a gingerale.'
                            },
                        ]
                    }
                };

                return statsData;
            },
        };
});
