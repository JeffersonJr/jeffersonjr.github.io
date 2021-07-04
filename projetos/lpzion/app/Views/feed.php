<div class="services-card-section spad">
    <div class="container">
        <div class="section-title">
            <h2>Lista de <span>Notícias</span></h2>
        </div>
        <div class="row" style="margin-bottom: 10px">
            <!-- Single Card -->
            <div class="col-md-3 col-sm-12" v-for="item in itens">
                <div class="sv-card">
                    <div class="post-date">
                        <h2 id="post-date-1" v-html="item.datas">{{item.data}}</h2>
                    </div>
                    <div class="card-text">
                        <h2 class="post-title" id="post-title-1">{{item.title}}</h2>
                        <p id="post-content-1" v-html="item.desc"></p>
                        <a :href="item.link" class="read-more" target="_blank">Saber mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>