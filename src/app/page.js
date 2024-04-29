'use client'
import useArticles from "@/hooks/useArticles";
import BreadCrumb from "@/components/BreadCrumb";
import GridContainer from "@/components/GridContainer";

export default function Home() {

  const {articles} = useArticles();

  return (
      <main >
          <div className="lay-sidebar">
              <div className="sidebar__main">
                  <div className="row">
                      <div className="com-titleWithfollow hlp-marginBottom-15">
                          <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
                      </div>
                  </div>

                  <BreadCrumb articles={articles}/>

                  <GridContainer articles={articles}/>

                  <section className="row">
                      <div className="col-12 hlp-text-center hlp-margintop-40">
                          <button className="--btn --secondary">MÁS NOTAS DE ACUMULADO GRILLA</button>
                      </div>
                  </section>
              </div>
              <div className="sidebar__aside">
                  <div className="banner --desktop --large"></div>
                  <div className="com-ranking hlp-none hlp-tablet-none">
                      <h2 className="com-title-section-m">Recetas más leídas</h2>
                  </div>
                  <div className="banner --desktop --large"></div>
              </div>
          </div>
      </main>
  );
}
