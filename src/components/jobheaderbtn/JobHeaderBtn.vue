<template src="./jobheaderbtn.html"></template>

<script>
 
  export default {
    name: 'JobHeaderBtn',
    data(){
      return{
        jobbtns:
        [
          {dataValue:"Sale", href:"#", department:"Sale"},
          {dataValue:"Marketing", href:"#", department:"Marketing"},
          {dataValue:"Engineer", href:"#", department:"Engineer"},
        ]
      }
    }
   
  }
</script>
<style src="./jobheaderbtn.css" scope></style>