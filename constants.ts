import { TimelineRow, PillData } from './types';

export const AVATAR_1 = "https://picsum.photos/id/1005/100/100";
export const AVATAR_2 = "https://picsum.photos/id/1011/100/100";
export const AVATAR_3 = "https://picsum.photos/id/1012/100/100";
export const AVATAR_4 = "https://picsum.photos/id/1025/100/100";
export const USER_AVATAR = "https://picsum.photos/id/64/100/100";

export const CUSTOMER_CHART_DATA = [
  { name: 'Jan', web: 40, radio: 24 },
  { name: 'Feb', web: 30, radio: 13 },
  { name: 'Mar', web: 20, radio: 40 },
  { name: 'Apr', web: 27, radio: 39 },
  { name: 'May', web: 18, radio: 48 },
  { name: 'Jun', web: 23, radio: 38 },
  { name: 'Jul', web: 34, radio: 43 },
];

export const PILL_CHART_DATA: PillData[] = [
  { label: 'A', resources: 52, valid: 96, invalid: 81 },
  { label: 'B', resources: 48, valid: 51, invalid: 25 },
  { label: 'C', resources: 80, valid: 67, invalid: 49 },
  { label: 'D', resources: 34, valid: 28, invalid: 32 }, // Mocked extra
  { label: 'E', resources: 92, valid: 58, invalid: 20 },
  { label: 'F', resources: 36, valid: 39, invalid: 72 },
  { label: 'G', resources: 84, valid: 45, invalid: 30 }, // Mocked extra
];

// 7 columns as per image roughly
export const PILL_DISPLAY_DATA = [
    { id: 1, val1: 52, val2: 81, val3: null, color1: 'white', color2: 'orange' },
    { id: 2, val1: 96, val2: 25, val3: null, color1: 'green', color2: 'orange' },
    { id: 3, val1: 48, val2: 51, val3: null, color1: 'green', color2: 'white' },
    { id: 4, val1: 80, val2: 67, val3: 49, color1: 'green', color2: 'green', color3: 'orange' },
    { id: 5, val1: 34, val2: 28, val3: null, color1: 'orange', color2: 'white' },
    { id: 6, val1: 92, val2: 58, val3: 20, color1: 'green', color2: 'green', color3: 'orange' },
    { id: 7, val1: 84, val2: 39, val3: null, color1: 'orange', color2: 'green' },
    { id: 8, val1: 36, val2: 72, val3: null, color1: 'white', color2: 'orange' },
]


export const TIMELINE_DATA: TimelineRow[] = [
  {
    date: '30.09',
    events: [
      { id: '1', name: 'Shazam', type: 'customer', start: 3, duration: 10, avatars: [], count: 16, icon: 'shazam' }
    ]
  },
  {
    date: '29.09',
    events: [
      { id: '2', name: 'X', type: 'product', start: 17, duration: 12, avatars: [], count: 29, icon: 'x' }
    ]
  },
  {
    date: '28.09',
    events: [
      { id: '3', name: 'Group', type: 'web', start: 8, duration: 8, avatars: [AVATAR_1, AVATAR_2, AVATAR_3], count: 15 }
    ]
  },
  {
    date: '27.09',
    events: [
      { id: '4', name: 'Dribbble', type: 'customer', start: 10, duration: 10, avatars: [], count: 21, icon: 'dribbble' }
    ]
  },
  {
    date: '26.09',
    events: [
      { id: '5', name: 'Discord', type: 'web', start: 4, duration: 5, avatars: [], count: 10, icon: 'discord' }
    ]
  },
  {
    date: '25.09',
    events: [
      { id: '6', name: 'Facebook', type: 'product', start: 9, duration: 6, avatars: [], count: 15, icon: 'facebook' },
      { id: '7', name: 'Team', type: 'customer', start: 16, duration: 13, avatars: [AVATAR_4, AVATAR_1, AVATAR_2, AVATAR_3], count: 19 }
    ]
  },
  {
    date: '24.09',
    events: [
      { id: '8', name: 'Twitter', type: 'web', start: 11, duration: 6, avatars: [], count: 8, icon: 'twitter' }
    ]
  }
];
