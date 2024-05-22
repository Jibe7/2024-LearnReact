import './postCategory.css'

export default function PostCategory({ name, styleClass = 'bg-color', first_left = ""}) {
    return (
        <h1 id={first_left} class='category-card'><span class='bg-color' >{name}</span></h1>
    )
}