import './titleHeader.css'

export default function TitleHeader({ page_title }) {
    return (
        <>
            <header>
                <h1>
                    {page_title}
                </h1>
            </header>
        </>
    )

}