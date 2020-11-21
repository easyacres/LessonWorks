import axios from "axios";

export default {
  // Gets all Lessons
  getLessonsMain: function() {
    return axios.get("/api/lessonmain");
    //  Same naming as express routes.
  },

  getAdminsMain: function() {
    return axios.get("/api/adminmain");
    //  Same naming as express routes.
  },
  // Gets the Lesson Only with the given id
  // getLessonOnly: function(id) {
  //   return axios.get("/api/lessonmain/" + id);
  // },
  // Deletes the Lesson with the given id
  deleteLessonFromMain: function(id) {
    return axios.delete("/api/lessonmain/" + id);
  },
  // Saves a Lesson to the database
  saveLessontoMain: function(lessonmainData) {
    return axios.post("/api/lessonmain", lessonmainData);
    //          Client Sending to Server Side
  }
};

// JUST REFERENCING THE ROUTES NOT CREATING THEM.