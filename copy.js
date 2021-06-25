const yargs = require('yargs');
const fetch = require("node-fetch");
var un = null;
// var rep = null;

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
    .option("avatar", {
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
        description: "Name of the repository",
        alias: "repo",
        type: "string"
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv._.includes('username')) {
    un = argv.username;
}

// console.log(un);

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

if (argv.avatar == '') {
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

// if (argv.repository != '') {
//     rep = argv.repository;
//     const repargv = yargs
//         .command('repository', 'Name of the repository', {
//             repository: {
//                 description: 'Name of the repository',
//                 alias: 'r',
//                 type: 'string',
//             },
//         })
//         .option("status", {
//             description: "Private / Public",
//             type: "string",
//         })
//         .option("forks", {
//             description: "Forks count",
//             type: "number",
//         })
//         .option("starred", {
//             description: "Stargazers count",
//             type: 'number'
//         })
//         .option("watchers", {
//             description: "Watchers count",
//             type: 'number',
//         })
//         .option("topics", {
//             description: "Topics of the repository",
//             type: 'string'
//         })
//         .option("license", {
//             description: "License of the repository",
//             type: 'string'
//         })
//         .help()
//         .alias('repo-help', 'rh')
//         .argv;

//     if (repargv._.includes('repository')) {
//         console.log(repargv.repository);
//     }
// }
