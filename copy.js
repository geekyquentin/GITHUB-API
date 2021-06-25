const yargs = require('yargs');
const fetch = require("node-fetch");
var un = null;

const argv = yargs
    .command('username', 'Username of Github handle', {
        username: {
            description: 'Username of github handle',
            alias: 'u',
            type: 'string',
        },
    })
    .option("name", {
        description: "Name of Github handle",
        alias: 'n',
        type: "string",
    })
    .option("avatar_url", {
        description: "URL of Users' Avatar",
        alias: 'a',
        type: "string",
    })
    .option("github-handle", {
        description: "URL to the github handle",
        alias: 'l',
        type: 'string'
    })
    .option("email", {
        description: "Email of the user",
        alias: 'e',
        type: 'string',
    })
    .option("biodata", {
        description: "Biodata of the User",
        alias: "b",
        type: 'string'
    })
    .option("followers", {
        description: "Followers of the User",
        alias: 'fr',
        type: 'number'
    })
    .option("following", {
        description: "Users Following",
        alias: "fg",
        type: "number"
    })
    .option("repository", {
        description: "Repository details",
        alias: "repo",
        type: 'string'
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv._.includes('username')) {
    un = argv.username;
}
function run(value) {
    var response = null;

    getUser(un, value);

    function getUser(name, value) {

        fetch("https://api.github.com/users/" + name)
            .then(function (r) {
                return r.json();
            })
            .then(function (j) {
                response = j;
                assignValues(value);
            });
    }

    function assignValues(value) {
        myJSON = {
            "name": response.name,
            "username": response.login,
            "avatar": response.avatar_url,
            "email": response.email,
            "handle": "https://github.com/" + response.login,
            "bio": response.bio,
            "followers": response.followers,
            "following": response.following
        }
        if (myJSON["email"] == null) {
            myJSON["email"] = "Private Email ID";
        }
        console.log(myJSON[value]);
    }
}

if (argv.name == '') {
    run("name");
}

if (argv.avatar_url == '') {
    run("avatar");
}

if (argv['github-handle'] == '') {
    run("handle");
}

if (argv.email == '') {
    run("email");
}

if (argv.biodata == '') {
    run("bio");
}

if (argv.followers == '') {
    run("followers");
}

if (argv.following == '') {
    run("following");
}

// if (argv.directory != '') {
//     console.log(argv.directory);
// }