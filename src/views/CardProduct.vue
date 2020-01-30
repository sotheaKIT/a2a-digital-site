<template>
    <div id="card_product">
        <div class="l_card_product">
            <h1>Product</h1>
            
            <div class="c_arrow_left">
                    <img class="c_img_arrow" src="../assets/img/cardproduct/arrow_left.svg">      
            </div>
            <div class="c_arrow_right">
                    <img class="c_img_arrow" src="../assets/img/cardproduct/arrow_right.svg">
            </div>
            <div class="c_card_product">
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-01.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-02.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-03.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-04.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-04.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
                <div class="c_card_detail">
                    <img class="c_img_product" src="../assets/img/cardproduct/product-04.png">
                    <div class="c_title__product">
                        <h2>AI Book</h2>
                        <p>The machine writes the book that base on the user requirements. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .l_card_product {
        position: relative;
    }
    .c_card_product {
        margin: auto auto;
        display: flex;
        overflow-x :auto;
        scroll-snap-type: x mandatory;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .c_arrow_left {
        width: 5%;
        float: left;
        margin: auto;
        position: relative;
        height: 392px;
    }
    .c_card_detail {
        display: grid;
        width: 25%;
        flex-shrink: 0;
        height: 100%;
        scroll-behavior: smooth;
    }
    .c_arrow_right {
        float: right;
        width: 5%;
        position: relative;
        margin: auto;
        right: 0%;
        background-color: white;
        height: 392px;
    }
    .c_img_arrow {
        width: 17px;
        height: 35px;
        position: absolute;
        top: 25%;
        left: 40%;
        
    }
    .c_img_product {
        width: 230px;
        height: 230px;
        margin: auto;
        border-radius: 4px;
    }
    .c_title__product{
            width: 230px;
            display: grid;
            margin: auto;
        }
    @media screen and (max-width: 1170px) {
        .c_card_detail {
            width: 50%;
            display: grid;
            margin: auto;
        }
        .c_img_product {
            display: grid;
            margin: auto;
        }
    }
    @media screen and (max-width: 770px) {
        .c_card_detail {
            width: 100%;
        }
    }
    

</style>

<script>
 
  export default {
    name: 'CardProduct',
   
  }
</script> 