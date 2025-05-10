export function createPostEl(post) {
    const postEl = document.createElement('div')

    postEl.className = 'post-entry anim-in'

    postEl.innerHTML = `
    <h2>${capitalize(post.title)}</h2>
    <p>${truncate(post.body, 20)}</p>
    <sl-button>Read more</sl-button>
    `

    const readMoreBtn = postEl.querySelector('sl-button')
    readMoreBtn.addEventListener('click', () => {
        const dialogEl = document.createElement('sl-dialog')
        dialogEl.setAttribute('label', capitalize(post.title))
        dialogEl.innerHTML = `
        <p>${post.body}</p>
        `
        document.body.append(dialogEl)
        setTimeout(() => {
            dialogEl.show()
        }, 100)

        dialogEl.addEventListener('sl-after-hide', () => {
            dialogEl.remove()
        })
    })

    return postEl
}

export function capitalize(string) {
    if (typeof string != 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function truncate(string, numWords) {
    string = string.replace(/(\r\n|\n|\r)/gm,"")
    let truncatedString = string.split(" ").splice(0, numWords).join(" ")
    truncatedString += ' ...'
    return truncatedString
}