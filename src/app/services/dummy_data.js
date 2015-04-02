angular.module('urbndex')
    .service('dummy_data', function() {
        return {
            fetchQuiz: function () {
                 var quizData = {
                    'photoSrc': 'https://placekitten.com/g/200/300',
                    'answer': 'matt lavinia',
                    'choices': [
                        { 
                            'name': 'Steve Miller',
                        },
                        { 
                            'name': 'Matt Lavinia',
                        },
                        { 
                            'name': 'Theresa Maida',
                        },
                        { 
                            'name': 'Kay Nothstein',
                        },
                    ]
                };

                return quizData;
            },

            fetchProfile: function () {
                var profileData = {
                    'photoSrc': 'https://placekitten.com/g/200/300',
                    'name': 'matt lavinia',
                    'title': 'happiness engineer',
                    'dept': 'employee morale'
                };

                return profileData;
            },

            fetchUrbnDex: function () {
                var urbnDexData = {
                    cards: [
                    {
                        'photoSrc': 'https://placekitten.com/g/200/300',
                        'name': 'matt lavinia',
                        'title': 'happiness engineer',
                        'dept': 'employee morale'  
                    },
                    {
                        'photoSrc': 'https://placekitten.com/g/200/300',
                        'name': 'matt lavinia',
                        'title': 'happiness engineer',
                        'dept': 'employee morale'  
                    },
                    {
                        'photoSrc': 'https://placekitten.com/g/200/300',
                        'name': 'matt lavinia',
                        'title': 'happiness engineer',
                        'dept': 'employee morale'  
                    },
                    {
                        'photoSrc': 'https://placekitten.com/g/200/300',
                        'name': 'matt lavinia',
                        'title': 'happiness engineer',
                        'dept': 'employee morale'  
                    },
                    {
                        'photoSrc': 'https://placekitten.com/g/200/300',
                        'name': 'matt lavinia',
                        'title': 'happiness engineer',
                        'dept': 'employee morale'  
                    },
                    
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
