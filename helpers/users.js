var UsersHelper = {};


UsersHelper.usersPath = () => '/users/';
UsersHelper.userPath = (id) => `/users/${ id }`;
UsersHelper.userImage = (user) => {
    console.log(user.Profile.gender);
    switch (user.Profile.gender) {
        case 'male':
            return '/viking_guy.jpg';
        case 'female':
            return '/viking_girl.jpg';
        case 'pterodactyl':
            return 'https://us.123rf.com/450wm/carbouval/carbouval1511/carbouval151100004/48517216-isolated-illustration-of-a-intelligent-pterodactyl-reading-a-book.jpg';
    }
};
// UsersHelper.newUserPath = () => '/users/new';
// UsersHelper.editUserPath = (id) => `/users/${ id }/edit`;
// UsersHelper.destroyUserPath = (id) => `/users/${ id }/?_method=delete`;


module.exports = UsersHelper;
