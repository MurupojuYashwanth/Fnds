export interface Policy {
  id: string;
  title: string;
  summary: string;
  icon: string;
  details: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  interests: string[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}