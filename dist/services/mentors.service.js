import { Op, literal } from 'sequelize';

import {
  User,
  Mentor,
  Skill,
  Language,
  UserSkill,
  Education,
  Experience,
  Job,
} from '../db/models/index.js';
import ROLES from '../../src/constants/roles.js';

const getMentors = async ({ price, experience, skills, lang }) => {
  let whereArr = [{ '$user.role$': ROLES.MENTOR.id }];
  let whereStatement = {
    [Op.and]: whereArr,
  };
  if (price) {
    whereArr.push({ '$user.mentorInfo.price$': { [Op.lte]: price } });
  }
  if (experience) {
    whereArr.push({ '$user.mentorInfo.experience$': { [Op.gte]: experience } });
  }
  if (skills) {
    let skillsArr = skills.split(',');
    whereArr.push({ skill_id: { [Op.in]: skillsArr } });
  }
  if (lang) {
    whereArr.push({ '$user.languages.language$': lang });
  }

  let mentors = await UserSkill.findAll({
    where: whereStatement,
    group: [
      'user.mentorInfo.id',
      'user.name',
      'user.last_name',
      'user.mentorInfo.experience',
      'user.mentorInfo.price',
    ],
    attributes: [
      'user.name',
      literal('"user"."last_name" as "lastName"'),
      literal('"user->mentorInfo"."experience" as "experienceYears"'),
      'user.mentorInfo.price',
      'user.mentorInfo.id',
      literal('array_agg(DISTINCT "user->skills"."title") as skills'),
    ],
    raw: true,
    includeIgnoreAttributes: false,
    include: {
      model: User,
      attributes: ['name', 'last_name'],
      as: 'user',
      include: [
        {
          model: Mentor,
          attributes: ['experience', 'price', 'id'],
          as: 'mentorInfo',
        },
        {
          model: Skill,
          as: 'skills',
          attributes: ['title'],
          through: {
            attributes: [],
          },
        },
        {
          model: Language,
          as: 'languages',
          attributes: ['language'],
          through: {
            attributes: [],
          },
        },
      ],
    },
  });

  return { status: 'ok', mentors };
};

const getMentor = async ({ mentorId }) => {
  let mentor = await Mentor.findOne({
    where: { id: mentorId },
    attributes: [
      'id',
      'price',
      ['experience', 'experienceYears'],
      'about',
      ['last_seen_online', 'lastSeenOnline'],
      ['created_at', 'createdAt'],
    ],
    include: [
      {
        model: User,
        attributes: ['name', ['last_name', 'lastName']],
        as: 'userInfo',
        include: [
          {
            model: Skill,
            as: 'skills',
            attributes: ['title'],
            through: {
              attributes: [],
            },
          },
          {
            model: Language,
            as: 'languages',
            attributes: ['language'],
            through: {
              attributes: [],
            },
          },
          {
            model: Job,
            attributes: ['organization', 'position'],
            as: 'job',
          },
          {
            model: Experience,
            attributes: ['id', 'organization', 'position', 'from', 'to'],
            as: 'experience',
          },
          {
            model: Education,
            attributes: ['id', 'organization', 'specialization', ['graduated_at', 'graduatedAt']],
            as: 'education',
          },
        ],
      },
    ],
  });
  return { status: 'ok', mentor };
};

const mentorService = { getMentors, getMentor };

export default mentorService;
