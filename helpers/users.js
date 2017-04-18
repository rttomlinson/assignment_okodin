var UsersHelper = {};


UsersHelper.usersPath = () => '/users/';
UsersHelper.userPath = (id) => `/users/${ id }`;
UsersHelper.userViewsPath = (id) => `/users/${ id }/views`;


// UsersHelper.newUserPath = () => '/users/new';
// UsersHelper.editUserPath = (id) => `/users/${ id }/edit`;
// UsersHelper.destroyUserPath = (id) => `/users/${ id }/?_method=delete`;


module.exports = UsersHelper;
