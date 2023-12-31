import axios from "./axiosUrl";

class AuthServices {
  // --------------------- Authentication routes --------------------------

  // fetching
  // RefreshToken(data){
  //     return axios.post('/auth/token',data);
  // }

  register(data) {
    return axios.post("/signup", data);
  }

  update(data) {
    console.log("update");
    return axios.post("/update", data);
  }

  otp(data) {
    return axios.post("/signup/otp", data);
  }

  otpResend(data) {
    return axios.post("/signup/otp-resend", data);
  }

  login(data) {
    return axios.post("/login", data);
  }

  VerifyEmail(data) {
    return axios.post("/signup/resetOtp", data);
  }

  VerifyOtp(data) {
    return axios.post("/signup/checkOtp", data);
  }

  ResetPassword(data) {
    return axios.post("/signup/reset-password", data);
  }

  logout() {
    localStorage.clear();
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }

  getUserDetails() {
    const userId = localStorage.getItem("userId");

    console.log("userId", userId);
    return axios.get(`/user/${userId}`, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  getUserName() {
    let userName = localStorage.getItem("userName");
    if (userName != null)
      userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    return userName;
  }

  // google auth

  Google_login(data) {
    return axios.post("/google_login", data);
  }

  Google_Signup(data) {
    return axios.post("/google_signup", data);
  }

 

  StripePayment(data) {
    return axios.post("/stripe/payment", data, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  StripePayment_course(CourseLink) {
    return axios.get(`/stripe/${CourseLink}`, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

 

  AllCourses() {
    return axios.get("/home/allCourses");
  }

  HomepageCourse(CourseLink) {
    return axios.get(`/home/${CourseLink}`);
  }

  PreferenceCourse(CourseLink, data) {
    return axios.post(`/home/${CourseLink}`, data, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  UpdatedCourse(data) {
    return axios.put("course/Update", data);
  }

  //Bookmark
  bookmarkCourses(userName, userId) {
    return axios.get(`/users/${userName}/${userId}`, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  DeleteBookmark(data) {
    return axios.post("/unbookmark", data, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  BookMark(CourseId, CourseName, data) {
    return axios.post(`/home/${CourseId}/${CourseName}`, data, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  Download(CourseId) {
    return axios.get(`/pdf/download/${CourseId}`);
  }

  FetchCourses(CourseName, CourseId) {
    return axios.get(`/course/${CourseName}/${CourseId}`, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  Rating(data) {
    return axios.put("/Rating", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    });
  }

  TeacherHomePage(data) {
    return axios.post("/creater/homepage", data, {
      headers: {
        Authorization:
          "Bearer " +
          localStorage.getItem("user") +
          " " +
          localStorage.getItem("ref_token"),
      },
    });
  }

  TeacherCourseDelete(data) {
    return axios.post("/course/delete", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    });
  }
}

export default new AuthServices();
