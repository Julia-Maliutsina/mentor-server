import mentorService from '../services/mentors.service.js';

const mentors = async (request, response) => {
  try {
    const { price, experience, skills, lang } = request.query;
    const mentorsList = await mentorService.getMentors({
      price,
      experience,
      skills,
      lang,
    });

    if (mentorsList.status === 'error') {
      return response.status(400).send({ message: mentorsList.message });
    }
    response.status(200).send({ mentors: mentorsList.mentors });
    return;
  } catch (e) {
    console.log(e);
  }
};

const mentor = async (request, response) => {
  try {
    const { mentorId } = request.params;
    const { mentor } = await mentorService.getMentor({ mentorId });

    if (mentor.status === 'error') {
      return response.status(400).send({ message: mentorsList.message });
    }
    response.status(200).send({ mentor });
    return;
  } catch (e) {
    console.log(e);
  }
};

export { mentors, mentor };
