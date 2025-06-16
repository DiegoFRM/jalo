export type RewardType = 'raffle' | 'points' | 'drops' | 'event_tickets' | 'coupons'
export type ExperienceStatus = 'active' | 'upcoming' | 'completed'
export type MissionType = 'survey' | 'trivia' | 'game' | 'secret_code' | 'photo' | 'registration' |
'purchase'
export type MissionStatus = 'completed' | 'available' | 'locked'
export interface Experience {
id: string
title: string
description: string
brandName: string
brandLogo: string
coverImage: string
rewardType: RewardType
rewardDescription: string
status: ExperienceStatus
startDate: string
endDate: string
missionCount: number
}
export interface Mission {
id: string
experienceId: string
title: string
description: string
type: MissionType
status: MissionStatus
rewardValue: number
order: number
content: any // This will vary based on mission type
}
