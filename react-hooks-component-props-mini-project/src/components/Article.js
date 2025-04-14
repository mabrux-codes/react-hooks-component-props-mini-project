export default function Article({ title, date = "No date provided", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}