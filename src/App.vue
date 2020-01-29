<style src="./styles/app.css"></style>
<template>
  <div id="app">
    <div class="l_contrainer">
      <Navigator/>
      <component :is="currentMenu" :right="side === 'right' ? true: false">
            <div id="vector">     
                <svg  width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.65039 8.74568L0.860939 16.8937C0.791212 16.9668 0.698244 17.0033 0.605276 17.0033C0.515626 17.0033 0.429298 16.9701 0.359571 16.9037C0.220118 16.7676 0.213478 16.5451 0.349611 16.4023L7.90664 8.49998L0.349609 0.597635C0.213476 0.458182 0.216797 0.2324 0.35957 0.0995878C0.502343 -0.0365449 0.724805 -0.0299043 0.860937 0.109549L8.65039 8.25427C8.7832 8.39041 8.7832 8.60623 8.65039 8.74568Z" fill="#138690"/>
                </svg>
           </div>
            <a href="#">
                <i class="fa fa-fw fa-bell-o"></i>
                <span>Services</span>
              </a> 
          <div id="vector">     
                <svg  width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.65039 8.74568L0.860939 16.8937C0.791212 16.9668 0.698244 17.0033 0.605276 17.0033C0.515626 17.0033 0.429298 16.9701 0.359571 16.9037C0.220118 16.7676 0.213478 16.5451 0.349611 16.4023L7.90664 8.49998L0.349609 0.597635C0.213476 0.458182 0.216797 0.2324 0.35957 0.0995878C0.502343 -0.0365449 0.724805 -0.0299043 0.860937 0.109549L8.65039 8.25427C8.7832 8.39041 8.7832 8.60623 8.65039 8.74568Z" fill="#138690"/>
                </svg>
           </div>
            <a href="#">
                <i class="fa fa-fw fa-envelope-o"></i>
                <span>Products</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-comment-o"></i>
                <span>About</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-bar-chart-o"></i>
                <span>Contact</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-newspaper-o"></i>
                <span>Jobs</span>
            </a>

           
        </component>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Navigator from './components/navigator/navigator.vue'
import Footer from './components/footer/footer.vue'
import slide from './components/navigator/Menu/slide.vue'
  
export default {
  name: 'App',
  data() {
        return {
          
          side: 'right',
          currentMenu: 'slide'
        };
      },
  components: {
    Navigator,
    Footer,
    slide,
    
  }
}
</script>
