import {useEffect, useState} from "react";

const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/');
            const data = await response.json();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    return articles;
}

export default useArticles;