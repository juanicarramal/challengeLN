import {useEffect, useState} from "react";

const BreadCrumb = ({ articles }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        let tagsCollection = [];

        articles?.map((article) => {
            article.taxonomy.tags.map((tag) => {
                const {slug, text} = tag;
                let find = false;

                tagsCollection.map((tagCollection)=>{
                    if(tagCollection.slug === slug){
                        tagCollection.count++;
                        find = true;
                    }
                })

                if(!find){
                    tagsCollection.push({
                        slug,
                        text,
                        count: 1
                    });
                }

            });
        });

        setTags(tagsCollection.sort((a, b) => b.count - a.count).slice(0, 10));

    }, [articles]);

    return (
        <div className="row">
            <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
                {tags.map((tag, index) => (
                    <a key={index} href={`/tema/${tag.slug}/`} className="">{tag.text}</a>
                ))}
            </div>
        </div>
    );
}

export default BreadCrumb;