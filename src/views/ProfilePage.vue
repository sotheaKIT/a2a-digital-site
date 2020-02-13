<style src="../styles/profile.css"></style>
<template>
    <div class="l_profile-page container">
        <div class="l_profile__title">
            <h1>Managment Team</h1>
        </div>
        <section id="bekku" class="l_card__profile">
            <div class="l_card_detail">
                <div class="c_cart__text">
                    <h2>Kenzaburo Bekku</h2>
                    <h3>Consultant Team</h3>
                    <h4></h4>
                </div>
                <div class="c_img_right">
                    <img class="c_card__img right" src="../../public/assets/component/about-card/Advisor/bekku.jpg"
                         alt="bekku"/>
                </div>
                <div class="c_cart__text">
                    <p>He joined Accenture in 2004. Since then, he has been in the Manufacturing and Distribution
                        Division and the Strategy
                        Consulting Division. He has been engaged in management consulting for 13 years. Involved in this
                        project since 2017,
                        his responsible for corporate planning, global marketing, and launching new businesses. </p>
                    <back-about/>
                </div>
            </div>
        </section>

        <section id="mariko" class="l_card__profile">
            <div class="l_card_detail">
                <div class="c_cart__text text_right">
                    <h2>Mariko Sadamatsu</h2>
                    <h3>Cambodia Marketing Team</h3>
                    <h4></h4>
                </div>
                <div class="c_img_left">
                    <img class="c_card__img" src="../../public/assets/component/about-card/Advisor/bekkuwife.jpg"
                         alt="bekkuwife"/>
                </div>
                <div class="c_cart__text text_right">
                    <p>After graduating from university, she worked at Accenture Co., Ltd. as a number of program
                        management and CIO
                        advisory services that consistently support from project conception / planning to execution /
                        operation management.
                        After her second childcare leave, she took a leave of absence and obtained an MBA from Keio
                        Business School (Keio
                        Business School). After that, she joined the consulting department of Gartner Japan Co., Ltd.,
                        as an associate
                        director, she was involved in supporting the renewal of core systems and the development of
                        technology
                        strategies in the medium-term business plan. At Kirirom, she is in charge of coordination and
                        project management
                        for industry-academia collaboration projects, acquisition of scholarship sponsors and matching
                        support.</p>
                    <back-about class="float-right float-md-left"/>
                </div>
            </div>
        </section>

        <section id="chihiro" class="l_card__profile">
            <div class="l_card_detail">
                <div class="c_cart__text">
                    <h2>Chihiro Kurose</h2>
                    <h3>Japan Marketing Team</h3>
                    <h4></h4>
                </div>
                <div class="c_img_right">
                    <img class="c_card__img right" src="../../public/assets/component/about-card/Advisor/chihiro.jpg"
                         alt="chihiro"/>
                </div>
                <div class="c_cart__text">
                    <p>After graduating from University of Tsukuba, joined a business consulting company after working
                        for a temporary
                        staffing company. Introduced ERP and promoted organization / business reform projects. Involved
                        in vkirirom
                        Project since 2015 and is in charge of the corporate office. As female management, she is also
                        the global
                        recruiting manager who promotes diversity adoption. </p>
                    <back-about/>
                </div>
            </div>
        </section>
        <section id="mashima" class="l_card__profile">
            <div class="l_card_detail" style="padding-bottom: 0 !important;">
                <div class="c_cart__text text_right">
                    <h2>Yasue Mashima</h2>
                    <h3>Technology Team</h3>
                    <h4></h4>
                </div>
                <div class="c_img_left">
                    <img class="c_card__img" src="../../public/assets/component/about-card/Managers/mashami.jpg"
                         alt="mashami"/>
                </div>
                <div class="c_cart__text text_right">
                    <p>After graduating from university, she worked for the software development company in Japan. She
                        has a team leader
                        experience for global systems that include development. In 2018, she joined the global general
                        trading company
                        as a transferred employee in charge of the finance data analyzing team. She is working A2A
                        Digital from February
                        2020. She lives in Cambodia.</p>
                    <back-about class="float-right float-md-left"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import BackAbout from "../components/back-about/back-about";

    export default {
        name: "ProfilePage",
        components: {BackAbout}
    }
</script>