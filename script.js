const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');
textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

const createTags = (input) => {
    console.log(input)
}