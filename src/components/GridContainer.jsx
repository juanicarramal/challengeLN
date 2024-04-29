import GridItem from "@/components/GridItem";
import {useEffect, useState} from "react";

const GridContainer = ({ articles }) => {
    const [_articles, setArticles] = useState([]);

    useEffect(() =>{
        let art = [];
        articles?.map((article) => {
            if(article.subtype === "7"){
                art.push({
                    id: article._id,
                    title: article.headlines.basic,
                    date: article.display_date,
                    img: article.promo_items.basic.url
                });
            }
        });
        setArticles(art);
    }, [articles]);

    return (
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {_articles?.map((article) => (
                <GridItem key={article.id} article={article}/>
            ))}
        </section>
    );
}

export default GridContainer;