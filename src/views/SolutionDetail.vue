<template>
    <div id="product-detail">
        <Slide/>
        <div class="l_product_detail">
            <div class="c_product_detail">
                <p>Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life. That’s why you should prepare better for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented.Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life.</p>
                <div class="c_product_detail_right">
                    <img class="ai_img" src="../assets/img/productdetail/ai-uni-main_resize_md.jpg">
                </div>
                <div class="c_product_detail_left">
                    <h3>Why we think about this</h3>
                    <p>Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life. That’s why you should prepare better for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented.Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life.</p>
                    <h3>Solution to the problem</h3>
                    <ul class="list">
                        <li class="order_list">Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life.</li>
                        <li class="order_list">That’s why you should prepare bette r for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical and business-oriented.</li>
                        <li class="order_list">Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life.</li>
                        <li class="order_list">That’s why you should prepare bette r for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented. </li>
                        <li class="order_list">Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life.</li>
                    </ul>               
                </div>
                <div class="c_feature">
                    <h3>Feature</h3>
                    <ul class="list">
                        <li><i>Smart Book :</i>Smart Book :Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life. That’s why you should prepare bette r for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented.</li>
                        <li><i>Detact:</i> Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life. That’s why you should prepare bette r for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented.</li>
                        <li><i>Read and analyz:</i> Artificial Intelligence became one of the most prevalent topics in 2019.AI is here to stay thanks to its practical applications in many industries and in our daily life. That’s why you should prepare bette r for our technological future by reading top Artificial Intelligence books.I have divided them into 3 main categories: sociological, philosophical andbusiness-oriented.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Cardproduct/> 
    </div>
</template>
<style scoped>
    
    #product-detail {
        font-style: normal;
        font-weight: normal;
    }
    .l_product_detail {
        padding-top: 100px;
    }
    .c_product_detail {
        padding: 0px 90px;
    }
    .c_product_detail_left {
        float: left;
        width: 50%;
    }
    .c_product_detail_right {
        float: right;
    }
    .ai_img {
        width: 550px;
        height: 475px;
        padding-top:80px;
    }
    .c_feature {
        display: inline-block;
    }
    #product-detail i {
        font-style: normal;
        color: #138690;
    }
    ul li::before {
        content: "\2022";
        color: #138690;
        font-weight: bold;
        display: inline-block; 
        width: 1em;
        margin-left: -1em;
        font-size: 30px;
    }

    /* .order_list::before {
        color: red;
        content: "\2022";
        font-size: 30px;
    } */

    .list {
        padding-left: 40px;
    }

    @media screen and (max-width : 1280px) {
        .ai_img {
            padding-top: 0px;
        }
        .c_product_detail {
            padding: 0px 30px;
        }
        .l_product_detail {
            display: block;
        }
        .c_product_detail {
            display: block;
        }
        .c_product_detail_left {
            width: 100%;
            float: none;
        }
        .c_product_detail_right {
            float: none;
        }
        .ai_img {
            width: auto;
            height: 300px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
        }
        @media screen and (max-width : 630px) {
            .ai_img {
                width: 290px;
                height: 300px;
            }
            .c_product_detail {
                padding: 0px 15px;
            }
        }
    }
</style>
<script>
import Slide from '../components/slide/slide.vue'
import Cardproduct from '../components/card-product/card-product.vue'


export default {
    name: 'SolutionDetail',
    components: {
    Slide,
    Cardproduct    
  }
}
</script>