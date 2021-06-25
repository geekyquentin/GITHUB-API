var myArgs = process.argv.slice(2);

var un = myArgs[0];
var rep = myArgs[1];
var opt = myArgs[2];

runrepo(un, rep, opt);

function runrepo(name, repo, option) {
    var response = null;
    getUser(name, repo, option);

    function getUser(name, repo, option) {
        fetch("https://api.github.com/repos/" + name + "/" + repo)
            .then(function (r) {
                return r.json();
            })
            .then(function (j) {
                response = j;
                repooption(option);
            })
    }

    function repooption(value) {

    }
}