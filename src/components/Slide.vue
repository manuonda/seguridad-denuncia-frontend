<template>
  <div>

   <ul class="steps-indicator steps-5" ng-if="!hideIndicators">

    <li  style="">
        <a>
          <span v-bind:class="{'number-active' : this.step == 1 || this.step > 1 }">1</span>
          <span v-bind:class="{'title-active' : this.step == 1 || this.step > 1 }">
            DATOS DEL HECHO</span>
        </a>
      </li>
      <li>
       <a>
        <span v-bind:class="{'number-active' : this.step == 2 || this.step > 2 ,'number': this.step < 2 }">2</span>
         <span v-bind:class="{'title-active' : this.step == 2 || this.step > 2, 'title': this.step < 2 }">
            DATOS DEL HECHO</span>
        </span>
       </a>
      </li>
      <li>
         <a>
        <span v-bind:class="{'number-active' : this.step == 3 || this.step > 3 ,'number': this.step < 3 }">3</span>
         <span  v-bind:class="{'title-active' : this.step == 3 || this.step > 3, 'title': this.step < 3 }">
           DATOS DEL DENUNCIADO</span>
       </a>
      </li>
      <li>
         <a>
        <span v-bind:class="{'number-active' : this.step == 4 || this.step > 4 ,'number': this.step < 4 }">4</span>
         <span v-bind:class="{'title-active' : this.step == 4 || this.step > 4, 'title': this.step < 4 }">
           DATOS DEL DENUNCIANTE</span>
       </a>
      </li>
      <li>
        <a>
        <span v-bind:class="{'number-active' : this.step == 5 || this.step > 5 ,'number': this.step < 5 }">5</span>
         <span v-bind:class="{'title-active' : this.step == 5 || this.step > 5 , 'title': this.step < 5 }">
            RESUMEN
          </span>
       </a>
      </li>
    </ul>



  </div>
</template>
<script>
export default {
  props:{
    step: Number
  }

}
</script>

<style>
.title{
  color: grey;
  font-weight: 400;
  padding: 14px 0 8px;
  display: block;
}
.title-active{
  color: #1955a6;
  font-weight: 400;
  padding: 14px 0 8px;
  display: block;
}
.number {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  padding: 4px;
}

.number-active{
  height: 25px;
  width: 25px;
  background-color: #1955a6;
  color: white;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  padding: 4px;
}

.steps-indicator {
    right: 0;
    bottom: 0;
    left: 0;
    margin-left: -30px;
    margin-right: -30px;
    padding: 10px 0 0;
    height: 80px;
    list-style: none;
    font-family: 'dinBold';
    font-size: 13px;
    background-color: #f2f2ec;
}
.steps-indicator.steps-5 li {
    width: calc(100% / 5);
}
.steps-indicator li.current, .steps-indicator li.default, .steps-indicator li.editing {
    pointer-events: none;
}
.steps-indicator li {
    position: relative;
    float: left;
    margin: 0;
    padding: 0;
    padding-top: 0px;
    text-align: center;
    line-height: 15px;
}
.steps-indicator li.editing a, .steps-indicator li.current a, .steps-indicator li.done a {
    color: #8aca1c;
}

.steps-indicator li a {
    color: grey;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    transition: .25s;
    cursor: pointer;
}
.steps ul .current a .number {
    /* border: 2px solid #222; */
}
.number {
    width: 31px;
    height: 31px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    align-items: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    -o-align-items: center;
    -ms-align-items: center;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center;
    border: 2px solid #999;
    margin-right: 15px;
}
</style>
