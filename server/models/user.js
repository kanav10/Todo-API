var mongoose = require('mongoose');

var user = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    }
});

module.export = {
    user: user,
};