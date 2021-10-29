const redesSociais = {
  github: 'cahanderson',
  youtube: 'andersonhelcias',
  facebook: 'andersonhelcias',
  instagram: 'andersonhelcias',
  twitter: 'andersonhelcias'
}

function changeSocialMediaLinks() {
  for (let li of redes.children) {
    const social = li.getAttribute('id')
    li.children[0].href = `https://${social}.com/${redesSociais[social]}`
    /* alert(li.children[0].href) */
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${redesSociais['github']}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      description.textContent = data.bio
      user.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
