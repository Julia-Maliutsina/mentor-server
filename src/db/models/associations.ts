import {
  User,
  Mentor,
  Mentee,
  Skill,
  Language,
  UserSkill,
  UserLanguage,
  Education,
  Experience,
  Job,
  Schedule,
  Call,
} from './index.js';

const syncAssociations = () => {
  // User - Mentor
  User.hasOne(Mentor, {
    foreignKey: 'user_id',
    as: 'mentorInfo',
  });
  Mentor.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'userInfo',
  });

  // User - Mentee
  User.hasOne(Mentee, {
    foreignKey: 'user_id',
  });
  Mentee.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'userInfo',
  });

  // User - Job
  User.hasOne(Job, {
    foreignKey: 'user_id',
    as: 'job',
  });
  Job.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'userInfo',
  });

  // User - Experience
  User.hasMany(Experience, {
    foreignKey: 'user_id',
    as: 'experience',
  });
  Experience.belongsTo(User);

  // User - Education
  User.hasMany(Education, {
    foreignKey: 'user_id',
    as: 'education',
  });
  Education.belongsTo(User);

  // User - Skill
  User.belongsToMany(Skill, {
    through: UserSkill,
    as: 'skills',
    foreignKey: 'user_id',
  });
  Skill.belongsToMany(User, {
    through: UserSkill,
    as: 'users',
    foreignKey: 'skill_id',
  });
  UserSkill.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
  });
  User.hasMany(UserSkill, {
    foreignKey: 'user_id',
    as: 'user_skills',
  });

  // User - Language
  User.belongsToMany(Language, {
    through: UserLanguage,
    as: 'languages',
    foreignKey: 'user_id',
  });
  Language.belongsToMany(User, {
    through: UserLanguage,
    as: 'users',
    foreignKey: 'language_id',
  });

  // User - Schedule
  User.hasMany(Schedule, {
    foreignKey: 'user_id',
  });
  Schedule.belongsTo(User);

  // Mentor - Call
  Mentor.hasMany(Call, {
    foreignKey: 'mentor_id',
  });
  Call.belongsTo(Mentor);

  // Mentee - Call
  Mentee.hasMany(Call, {
    foreignKey: 'mentee_id',
  });
  Call.belongsTo(Mentee);
};
export default syncAssociations;
