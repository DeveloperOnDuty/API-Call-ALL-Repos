/*
    Promise
*/
fetch('https://api.github.com/users/DeveloperOnDuty/repos')
.then((result)=> {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos
})
.then((repos)=> {
    console.log(`Total Number Of Repos Is ${repos.length}`);
    return repos;
})
.then((repos)=> {
    console.log(`First Repo Is ${repos[0].name}`);
    return repos;
})
.then((repos)=> {
    console.log(`Last Repo Is  ${repos[repos.length -1].name}`);
    return repos;
})
.then((repos)=> {
    for ( let i = 0; i < repos.length; i++){
        let newElement = document.createElement("div");
        let elementText = document.createTextNode(repos[i].name);
        newElement.appendChild(elementText);
        document.body.appendChild(newElement)
    }
})
