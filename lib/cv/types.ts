export type ResumeProfile = {
  network: string;
  displayText: string;
  url: string;
};

export type ResumeLocation = {
  city: string;
  country: string;
  remote: boolean;
  displayText: string;
};

export type ResumeBasics = {
  name: string;
  label: string;
  summary: string;
  citizenship: string;
  location: ResumeLocation;
  contact: {
    email: string;
    phone: string;
  };
  profiles: ResumeProfile[];
};

export type ResumeWork = {
  id: string;
  company: string;
  title: string;
  titleSecondary: string | null;
  location: string;
  remote: boolean;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  highlights: string[];
  keywords: string[];
};

export type ResumeSkillGroup = {
  category: string;
  keywords: string[];
};

export type ResumeEducation = {
  institution: string;
  studyType: string;
  area: string;
  minor: string | null;
  startDate: string;
  endDate: string;
  location: string;
};

export type ResumeMeta = {
  schemaName: string;
  schemaVersion: string;
  purpose: string;
  lastUpdated: string;
  dateFormat: string;
  atsNotes: string;
};

export type Resume = {
  meta: ResumeMeta;
  basics: ResumeBasics;
  work: ResumeWork[];
  skills: ResumeSkillGroup[];
  education: ResumeEducation[];
};
