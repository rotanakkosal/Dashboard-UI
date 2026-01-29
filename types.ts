export interface TimelineEvent {
  id: string;
  name: string;
  type: 'customer' | 'product' | 'web';
  start: number;
  duration: number;
  avatars: string[];
  count: number;
  icon?: string; 
}

export interface TimelineRow {
  date: string;
  events: TimelineEvent[];
}

export interface PillData {
  label: string;
  resources: number;
  valid: number;
  invalid: number;
}
