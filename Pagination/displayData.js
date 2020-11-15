// displaying data

const mainContent = document.querySelector('.main-content')

const displayData = (data) => {
    mainContent.innerHTML = data.map(item => {
        const { login, avatar_url, html_url } = item
        return (
            `
            <article class='content-data'>
                <img src=${avatar_url} alt=${login}>
                <h4>${login}</h4>
                <a href=${html_url}>view profile</a>
            </article>
            `
        )
    }).join('')
}

export default displayData