FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render("home");
    }
});

// user login redirect to profile
Accounts.onLogin(function () {
    FlowRouter.go('/profile');
});

// user logout redirect to home
Accounts.onLogout(function () {
    FlowRouter.go('/')
});

FlowRouter.route('/signup', {
    triggersEnter: [function (context, redirect) {
        if (Meteor.userId()) {
            redirect('/profile');
        }
    }],
    name: 'signup',
    action: function (params) {
        BlazeLayout.render("signup");
    }
});

FlowRouter.route('/login', {
    triggersEnter: [function (context, redirect) {
        if (Meteor.userId()) {
            redirect('/profile');
        }
    }],
    name: 'login',
    action: function (params) {
        BlazeLayout.render("login");
    }
});

FlowRouter.route('/profile', {
    triggersEnter: [function (context, redirect) {
        if (Meteor.userId()) {
            BlazeLayout.render("profile");
        }
        else {
            redirect('/login');
        }
    }],
});