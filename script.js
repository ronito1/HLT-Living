angular.module('healthyLivingExplorer', [])
.controller('HealthyLivingController', function($scope, $window) {
    $scope.concepts = [
        {
            title: 'Nutrition',
            icon: 'nutrition.png',
            description: 'Eating a balanced diet for optimal health.',
            detailsButton: 'Learn More',
            detailedDescription: 'Nutrition involves consuming a balanced diet rich in vitamins, minerals, and essential nutrients. It is important to eat a variety of foods to ensure your body gets all the necessary nutrients it needs to function properly.',
            showDetails: false
        },
        {
            title: 'Exercise',
            icon: 'exercise.png',
            description: 'Engaging in regular physical activity.',
            detailsButton: 'Learn More',
            detailedDescription: 'Regular exercise is crucial for maintaining physical health. It helps to strengthen muscles, improve cardiovascular health, and boost overall energy levels. Exercise can include activities like running, swimming, or even walking.',
            showDetails: false
        },
        {
            title: 'Mental Health',
            icon: 'mentalhealth.png',
            description: 'Maintaining psychological well-being.',
            detailsButton: 'Learn More',
            detailedDescription: 'Mental health involves managing stress, maintaining a positive outlook, and taking time for relaxation and self-care. Good mental health practices can help improve mood, reduce anxiety, and enhance overall quality of life.',
            showDetails: false
        },
        {
            title: 'Sleep',
            icon: 'sleep.png',
            description: 'Getting adequate rest and recovery.',
            detailsButton: 'Learn More',
            detailedDescription: 'Quality sleep is essential for physical and mental health. Adequate sleep helps to repair and rejuvenate the body, improve cognitive function, and enhance mood. It is recommended to get 7-9 hours of sleep each night.',
            showDetails: false
        },
        {
            title: 'Hydration',
            icon: 'hydration.png',
            description: 'Maintaining proper fluid balance.',
            detailsButton: 'Learn More',
            detailedDescription: 'Hydration is vital for many bodily functions, including temperature regulation, joint lubrication, and nutrient transport. It is important to drink enough water throughout the day to stay properly hydrated.',
            showDetails: false
        },
        {
            title: 'Stress Management',
            icon: 'stress.png',
            description: 'Effective techniques to manage stress.',
            detailsButton: 'Learn More',
            detailedDescription: 'Stress management involves techniques and strategies to control your stress levels. This includes activities like mindfulness, meditation, and yoga, as well as time management and seeking support when needed.',
            showDetails: false
        },
        {
            title: 'Healthy Relationships',
            icon: 'relations.png',
            description: 'Building and maintaining positive relationships.',
            detailsButton: 'Learn More',
            detailedDescription: 'Healthy relationships are crucial for emotional well-being. They involve mutual respect, trust, and open communication. Positive relationships can improve your mood, reduce stress, and enhance overall life satisfaction.',
            showDetails: false
        },
        {
            title: 'Preventive Healthcare',
            icon: 'prev.png',
            description: 'Regular check-ups and screenings.',
            detailsButton: 'Learn More',
            detailedDescription: 'Preventive healthcare includes regular medical check-ups, vaccinations, and screenings to detect and prevent illnesses early. It helps to maintain good health and prevent the progression of diseases through early intervention.',
            showDetails: false
        }
    ]

    $scope.testimonials = [
        { text: 'This guide has completely transformed my lifestyle. Highly recommend it to anyone looking to improve their health.', author: 'Ram' },
        { text: 'The BMI calculator and tips on nutrition were particularly helpful for me. Great resource!', author: 'Sam' },
        { text: 'A comprehensive and easy-to-follow guide on healthy living. Thank you!', author: 'Jam' }
    ]

    $scope.faqs = [
        { question: 'What is a healthy diet?', answer: 'A healthy diet includes a variety of foods that provide the nutrients you need to maintain your health, feel good, and have energy.' },
        { question: 'How much exercise do I need?', answer: 'It is recommended to get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week.' },
        { question: 'Why is sleep important?', answer: 'Sleep is essential for good health as it allows your body to repair and be ready for another day.' }
    ]

    $scope.resources = [
        { title: '1. World Health Organization (WHO)', link: 'https://www.who.int' },
        { title: '2. Centers for Disease Control and Prevention (CDC)', link: 'https://www.cdc.gov' },
        { title: '3. National Institutes of Health (NIH)', link: 'https://www.nih.gov' }
    ]
    $scope.bmiResults = [];
    
    $scope.redirectToPage = function(concept) {
        switch (concept.title) {
            case 'Nutrition':
                $window.location.href = 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet';
                break;
            case 'Exercise':
                $window.location.href = 'https://www.who.int/news-room/fact-sheets/detail/physical-activity';
                break;
            case 'Mental Health':
                $window.location.href = 'https://www.who.int/health-topics/mental-health';
                break;
            case 'Sleep':
                $window.location.href = 'https://www.cdc.gov/sleep/about/?CDC_AAref_Val=https://www.cdc.gov/sleep/about_sleep/index.html';
                break;
            case 'Hydration':
                $window.location.href = 'https://www.who.int/news-room/fact-sheets/detail/drinking-water';
                break;
            case 'Stress Management':
                $window.location.href = 'https://www.who.int/publications/i/item/9789240003927';
                break;
            case 'Healthy Relationships':
                $window.location.href = 'https://www.ny.gov/teen-dating-violence-awareness-and-prevention/what-does-healthy-relationship-look#:~:text=Healthy%20relationships%20involve%20honesty%2C%20trust,is%20no%20imbalance%20of%20power.';
                break;
            case 'Preventive Healthcare':
                $window.location.href = 'https://www.emro.who.int/about-who/public-health-functions/health-promotion-disease-prevention.html';
                break;
            default:
                break;
        }
    }

    $scope.showDescription = function(concept) {
        concept.showDetails = true
    }

    $scope.hideDescription = function(concept) {
        concept.showDetails = false
    }

    
    $scope.calculateBMI = function() {
        if ($scope.userWeight && $scope.userHeight && $scope.userName) {
            const heightInMeters = $scope.userHeight / 100;
            const bmi = ($scope.userWeight / (heightInMeters * heightInMeters)).toFixed(2);
            let status, suggestion;

            if (bmi < 18.5) {
                status = 'Underweight';
                suggestion = 'Consider focusing on Nutrition to gain a healthy weight.';
            } else if (bmi < 24.9) {
                status = 'Normal weight';
                suggestion = 'Keep up with a balanced approach including Exercise and Nutrition.';
            } else if (bmi < 29.9) {
                status = 'Overweight';
                suggestion = 'Incorporate more Exercise and monitor Nutrition.';
            } else {
                status = 'Obesity';
                suggestion = 'Focus on a comprehensive approach with Exercise, Nutrition, and Preventive Healthcare.';
            }

            $scope.bmiResults.push({
                name: $scope.userName,
                weight: $scope.userWeight,
                height: $scope.userHeight,
                bmi: bmi,
                status: status,
                suggestion: suggestion
            });

            $scope.userName = '';
            $scope.userWeight = '';
            $scope.userHeight = '';
            $scope.bmiResult = bmi;
            $scope.bmiStatus = status;
            $scope.suggestion = suggestion;
        }
    };

    $scope.viewResults = function() {
        const newTab = $window.open('', '_blank');
        let htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>BMI Results</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h1>BMI Results</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Weight (kg)</th>
                            <th>Height (cm)</th>
                            <th>BMI</th>
                            <th>Status</th>
                            <th>Suggestion</th>
                        </tr>
                    </thead>
                    <tbody>`;

        $scope.bmiResults.forEach(result => {
            htmlContent += `
                        <tr>
                            <td>${result.name}</td>
                            <td>${result.weight}</td>
                            <td>${result.height}</td>
                            <td>${result.bmi}</td>
                            <td>${result.status}</td>
                            <td>${result.suggestion}</td>
                        </tr>`;
        });

        htmlContent += `
                    </tbody>
                </table>
            </body>
            </html>`;

        newTab.document.write(htmlContent);
        newTab.document.close();
    }
}) 
