import axios from "axios";

export default {
    // getAllPosts: function () {
    //   return axios.get('/post')
    // },
    // createPost: function (post) {
    //   return axios.post('/post',
    //       {
    //         post
    //       }
    //   );
    // },
    // deletePost: function (postId) {
    //   return axios.delete(`/post/${postId}`);
    // },
    doSignIn(formValues) {
        return axios.post('/api/auth/signIn', formValues);
    },
    doSignUp(formValues) {
        return axios.post('/api/auth/signUp', formValues);
    },
    // getSinglePost(postId) {
    //   return axios.get(`/post/${postId}`);
    // },
    // getMyPosts() {
    //   return axios.get(`/post/userposts`);
    // }
};