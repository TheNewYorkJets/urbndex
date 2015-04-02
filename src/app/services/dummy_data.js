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
            }
        };
});
