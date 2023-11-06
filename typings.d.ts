interface SanityBody {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
}

interface Image {
  _type: "Image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImg: Image;
  dateEnded: date;
  dateStarted: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  banner: string[];
  email: string;
  heroImg: Image;
  profilePic: Image;
  phone: string;
  role: string;
}

export interface Project extends SanityBody {
  _type: "project";
  img: Image;
  linkToBuild: string;
  summary: string;
  technologies: Skill[];
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  img: Image;
  progress: number;
  title: string;
}
