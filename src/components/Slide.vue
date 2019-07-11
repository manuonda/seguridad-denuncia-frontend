<template>
  <div>
   <ul class="steps-indicator steps-5" ng-if="!hideIndicators">

    <li ng-class="{default: !step.completed &amp;&amp; !step.selected, current: step.selected &amp;&amp; !step.completed, done: step.completed &amp;&amp; !step.selected, editing: step.selected &amp;&amp; step.completed}" ng-repeat="step in getEnabledSteps()" class="ng-scope done" style="">
        <a  class="ng-binding">
          <span class="step-icon" style="position: absolute;left: 50%;">1</span>
          <span class="" style="color: #999; font-weight: 400;padding: 14px 0 8px; display: block;">
            Datos del Hecho</span>
        </a>
      </li>
      <li>
        <a>Característica del Hecho</a>
      </li>
      <li>
        <a>Datos del Denunciado</a>
      </li>
      <li>
        <a >Datos del Denunciante</a>
      </li>
      <li>
        <a>Resumen</a>
      </li>
    </ul>

  </div>
</template>
<script>
export default {

}
</script>

<style>
.steps-indicator {
    right: 0;
    bottom: 0;
    left: 0;
    margin-left: -30px;
    margin-right: -30px;
    padding: 20px 0 0;
    height: 60px;
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
</style>
