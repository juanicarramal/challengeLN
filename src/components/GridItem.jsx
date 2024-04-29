
const GridItem = ({ article }) => {

    const formatDate = (date) => {
        //'1 de Julio de 2021'
        let d = new Date(date);
        let month = d.toLocaleString('es-ES', { month: 'long' });
        let day = d.getDate();
        let year = d.getFullYear();
        return `${day} de ${month} de ${year}`;
    }

    return (
        <article className="mod-caja-nota lugares w-100-mobile">
            <section id={article.id} className="cont-figure">
                <a href="" className="figure">
                    <picture id="" className="content-pic picture">
                        <img src={article.img} alt="" className="content-img"/>
                    </picture>
                </a>
            </section>
            <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu"><a href="">{article.title}</a></h2>
                <h4 className="com-date">{formatDate(article.date)}</h4>
            </div>
        </article>
    );
}

export default GridItem;