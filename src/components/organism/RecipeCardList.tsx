// molecule
import RecipeCard from "../molecules/RecipeCard";


interface RecipeCardListProps {
    
}
 
const RecipeCardList: React.FC<RecipeCardListProps> = () => {
    return (
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
            <RecipeCard title="Pancakes" timeToPrepare="25 minutes" preview="sugar spice and everything nice" author="Rihards Slutins" />
        </div>
    );
}
 
export default RecipeCardList;