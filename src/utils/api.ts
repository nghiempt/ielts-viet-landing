const BASE_URL = "https://api.farmcode.io.vn/v1";
// const BASE_URL = 'http://localhost:8000/api/v1';

export const API = {
  //SLIDER
  GET_ALL_SLIDER: `${BASE_URL}/ielts-viet/slider`,
  //BLOG
  GET_ALL_BLOG: `${BASE_URL}/ielts-viet/blog`,
  GET_BLOG_BY_ID: `${BASE_URL}/ielts-viet/blog`,
  GET_AUTHOR_BY_ID: `${BASE_URL}/ielts-viet/author`,
  //VIDEO
  GET_ALL_VIDEO: `${BASE_URL}/ielts-viet/videos`,
  CREATE_VIDEO: `${BASE_URL}/ielts-viet/video`,
  UPDATE_VIDEO: `${BASE_URL}/ielts-viet/video`,
  DELETE_VIDEO: `${BASE_URL}/ielts-viet/video`,
  //COURSE
  GET_ALL_COURSE: `${BASE_URL}/ielts-viet/courses`,
  CREATE_COURSE: `${BASE_URL}/ielts-viet/course`,
  UPDATE_COURSE: `${BASE_URL}/ielts-viet/course`,
  DELETE_COURSE: `${BASE_URL}/ielts-viet/course`,
  //REVIEWS
  GET_ALL_REVIEW: `${BASE_URL}/ielts-viet/review`,
  //TIMEKEEPING
  GET_ALL_TEACHER: `${BASE_URL}/ielts-viet/account/`,
  CHECK_IN_OUT: `${BASE_URL}/ielts-viet/account/check`,
  TIMEKEEPING_LOGIN: `${BASE_URL}/ielts-viet/account`,
  CREATE_TEACHER: `${BASE_URL}/ielts-viet/account/`,
  UPDATE_TEACHER: `${BASE_URL}/ielts-viet/account`,
  DELETE_TEACHER: `${BASE_URL}/ielts-viet/account`,

  //CONTACT
  SEND_EMAIL_QA: `${BASE_URL}/ielts-viet/send-email-qa`,
};
