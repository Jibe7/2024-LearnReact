import PostCategory from './PostCategory'
import './menu.css'

export default function Menu() {
    return (
        <>
            <nav>
                < PostCategory first_left='first-left' name="Music"/>
                < PostCategory name="Fashion"/>
                < PostCategory name="Sport"/>
                < PostCategory name="Public Policies"/>
            </nav>
        </>
    )

}