import react from '../../../assets/skills_logo/react.png';
import javascrip from '../../../assets/skills_logo/Javascript_Logo.png';
import mongodb from '../../../assets/skills_logo/mongodb.png';
import nextjs from '../../../assets/skills_logo/nextjs-boilerplate-logo.png';
import css3 from '../../../assets/skills_logo/css3.png';
import typscript from '../../../assets/skills_logo/typescript.png';
import node from '../../../assets/skills_logo/node.png';
import profile1 from '../../../assets/images/profile_pto1.jpeg';
import profile2 from '../../../assets/images/profile_pto2.jpeg';
import profile3 from '../../../assets/images/profile_pto3.jpeg';
import profile4 from '../../../assets/images/profile_pto4.jpeg';
import cover1 from '../../../assets/images/profile_cover1.jpeg';
import cover2 from '../../../assets/images/profile_cover2.jpeg';


const profile = [
  {
    "_id": 1,
    "profile_photo": profile1,
    "cover_photo": cover1,
    "name": "Romon Ahmed",
    "location": "Cumilla, Bangladesh",
    "label": "Most popular",
    "skill_tag": ['Html5', 'Css3', 'Javascript', 'React'],
    "skills": [
      react,
      javascrip,
      mongodb,
      nextjs
    ]
  },
  {
    "_id": 2,
    "profile_photo": profile2,
    "cover_photo": cover2,
    "label": "Featured",
    "name": "Sydul Islam",
    "location": "Chittagon, Bangladesh",
    "skill_tag": ['Html5', 'Css3', 'Javascript', 'React'],
    "skills": [
      css3,
      javascrip,
      typscript,
      nextjs
    ]
  },
  {
    "_id": 3,
    "profile_photo": profile3,
    "cover_photo": cover1,
    "label": "Boost",
    "name": "Byjid Ahmed",
    "location": "Kolkata, India",
    "skill_tag": ['Node Js', 'Javascript', 'MongoDb', 'Next js'],
    "skills": [
      node,
      javascrip,
      mongodb,
      nextjs
    ]
  },
  {
    "_id": 4,
    "profile_photo": profile4,
    "cover_photo": cover2,
    "label": "Sponsore",
    "name": "Salamn Ahmmed",
    "location": "New York, Usa",
    "skill_tag": ['React', 'Next Js', 'Node Js', 'Typescript'],
    "skills": [
      react,
      nextjs,
      node,
      typscript
    ]
  },
  {
    "_id": 5,
    "profile_photo": profile1,
    "cover_photo": cover1,
    "name": "Abu Bakar",
    "label": "",
    "location": "Karachi, Pakistan",
    "skill_tag": ['React', 'Javascript', 'MongoDb', 'Next js'],
    "skills": [
      react,
      javascrip,
      mongodb,
      nextjs
    ]
  },
  {
    "_id": 6,
    "profile_photo": profile2,
    "cover_photo": cover2,
    "name": "Habibur Rahman",
    "label": "",
    "location": "Melborn, Australia",
    "skill_tag": ['React', 'Javascript', 'MongoDb', 'Next js'],
    "skills": [
      react,
      javascrip,
      mongodb,
      nextjs
    ]
  },
  {
    "_id": 7,
    "profile_photo": profile3,
    "cover_photo": cover1,
    "name": "Rohan Isalm",
    "label": "Most Popular",
    "location": "tokio, Japan",
    "skill_tag": ['Javasript', 'Typescript', 'MongoDb', 'Next js'],
    "skills": [
      javascrip,
      typscript,
      mongodb,
      nextjs
    ]
  },
  {
    "_id": 8,
    "profile_photo": profile4,
    "cover_photo": cover2,
    "name": "Robiul Islam",
    "label": "",
    "location": "Riyad, Saudiarabia",
    "skill_tag": ['React', 'Typescript', 'MongoDb', 'Next js'],
    "skills": [
      typscript,
      react,
      mongodb,
      nextjs
    ]
  }
]

export default profile;