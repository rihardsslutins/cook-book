import Button from "../atoms/Button"

interface RecipeCardProps {
    title: string,
    timeToPrepare: string,
    preview: string,
    author: string,
}
 
const RecipeCard: React.FC<RecipeCardProps> = ({title, preview, author}) => {
    return (
        <article className="flex flex-col w-96 border-2 py-3 px-6 border-black shadow-[-4px_4px_0]">
            <h1 className="text-3xl font-black">{title}</h1>
            <p>{preview}</p>
            <div className="flex flex-row justify-between items-center mt-16">
                <span className="text-lg font-bold">{author}</span>
                <Button variant="primary">Cook this</Button>
            </div>
        </article>
    );
}
 
export default RecipeCard;