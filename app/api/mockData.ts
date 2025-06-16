
// mockData.ts
import { Experience, Mission } from './types'
export const experiences: Experience[] = [
{
id: 'exp-001',
title: 'Summer Adventure Challenge',
description: 'Complete outdoor challenges and win exciting summer gear!',
brandName: 'OutdoorLife',
brandLogo: '/brands/outdoor-life.png',
coverImage: '/experiences/summer-adventure.jpg',
rewardType: 'raffle',
rewardDescription: 'Win a premium camping set worth $500',
status: 'active',
startDate: '2025-04-01T00:00:00Z',
endDate: '2025-05-15T23:59:59Z',
missionCount: 5
},
{
id: 'exp-002',
title: 'Fitness Championship',
description: 'Track your workouts and compete for the fitness crown!',
brandName: 'FitZone',
brandLogo: '/brands/fitzone.png',
coverImage: '/experiences/fitness-championship.jpg',
rewardType: 'points',
rewardDescription: 'Top 3 winners get premium fitness subscriptions',
status: 'active',
startDate: '2025-03-15T00:00:00Z',
endDate: '2025-04-30T23:59:59Z',
missionCount: 4
},
{
id: 'exp-003',
title: 'Coffee Connoisseur',
description: 'Discover new coffee flavors and earn exclusive rewards!',
brandName: 'BeanBrew',
brandLogo: '/brands/beanbrew.png',
coverImage: '/experiences/coffee-connoisseur.jpg',
rewardType: 'drops',
rewardDescription: 'Earn a free specialty coffee for each completed mission',
status: 'upcoming',
startDate: '2025-05-01T00:00:00Z',
endDate: '2025-06-15T23:59:59Z',
missionCount: 3
},
{
id: 'exp-004',
title: 'Tech Innovation Summit',
description: 'Participate in our tech challenges and win tickets to the summit!',
brandName: 'TechFuture',
brandLogo: '/brands/techfuture.png',
coverImage: '/experiences/tech-summit.jpg',
rewardType: 'event_tickets',
rewardDescription: 'Win VIP passes to the annual Tech Innovation Summit',
status: 'completed',
startDate: '2025-01-10T00:00:00Z',
endDate: '2025-02-28T23:59:59Z',
missionCount: 6
}
]
export const missions: Mission[] = [
// Summer Adventure Challenge Missions
{
id: 'mission-001',
experienceId: 'exp-001',
title: 'Trail Explorer Quiz',
description: 'Test your knowledge about hiking trails and safety.',
type: 'trivia',
status: 'available',
rewardValue: 1, // 1 raffle ticket
order: 1,
content: {
questions: [
{
question: 'What should you always carry when hiking in remote areas?',
options: ['Smartphone only', 'Water and map', 'Just snacks', 'Nothing special'],
correctAnswer: 1
},
{
question: 'Which of these is NOT a recommended practice when hiking?',
options: ['Telling someone your route', 'Checking weather forecast', 'Hiking alone innew areas', 'Bringing enough water'],
correctAnswer: 2
},
{
question: 'What is the "Leave No Trace" principle about?',
options: ['Moving very quietly', 'Not leaving any garbage or impact', 'Not using markedtrails', 'Avoiding wildlife completely'],
correctAnswer: 1
}
]
}
},
{
id: 'mission-002',
experienceId: 'exp-001',
title: 'Capture the Sunrise',
description: 'Take and upload a photo of a sunrise from your favorite outdoor spot.',
type: 'photo',
status: 'locked',
rewardValue: 2, // 2 raffle tickets
order: 2,
content: {
instructions: 'Wake up early and capture a beautiful sunrise from any outdoor location. Make sure your photo shows the horizon and sun clearly.', requirements: ['Landscape orientation preferred', 'Minimum resolution: 1080 x 720 pixels', 'No heavy filters or editing']
}
},
{
id: 'mission-003',
experienceId: 'exp-001',
title: 'Secret Trail Code',
description: 'Find and enter the secret code hidden at participating trail centers.',
type: 'secret_code',
status: 'locked',
rewardValue: 3, // 3 raffle tickets
order: 3,
content: {
hint: 'Visit any OutdoorLife partner trail center and look for the JALO QR code near the information desk.', codeFormat: '8 alphanumeric characters',
exampleFormat: 'TRAIL123'
}
},
// More missions for other experiences would be added here...
// Fitness Championship Missions
{
id: 'mission-004',
experienceId: 'exp-002',
title: 'Fitness Knowledge Check',
description: 'Test your knowledge about fitness and nutrition.',
type: 'trivia',
status: 'available',
rewardValue: 100, // 100 points
order: 1,
content: {
questions: [
{
question: 'Which of these is considered a compound exercise?',
options: ['Bicep curls', 'Squats', 'Calf raises', 'Wrist curls'],
correctAnswer: 1
},
{
question: 'What is the recommended protein intake for an active adult?',
options: ['0.3-0.5g per kg body weight', '0.8-1.2g per kg body weight', '1.6-2.2g per kg body weight', '3.0-4.0g per kg body weight'],
correctAnswer: 2
}
]
}
},
// Coffee Connoisseur Missions
{
id: 'mission-009',
experienceId: 'exp-003',
title: 'Coffee Bean Quiz',
description: 'Test your knowledge about coffee beans and brewing methods.',
type: 'trivia',
status: 'locked', // Locked because experience is upcoming
rewardValue: 1, // 1 free coffee
order: 1,
content: {
questions: [
{
question: 'Which country is the largest producer of coffee in the world?',
options: ['Colombia', 'Ethiopia', 'Vietnam', 'Brazil'],
correctAnswer: 3
},
{
question: 'Which coffee brewing method typically produces the strongest coffee?',
options: ['Drip coffee', 'French press', 'Espresso', 'Cold brew'],
correctAnswer: 2
}
]
}
}
]