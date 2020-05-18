export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
        this.initChildSelect();
    }
    preventDefaultaction (evt) {
        evt.preventDefault();
    }
    initChildSelect() {
        let childSelect=$('#childSelect');
        childSelect.change(this.childDisplay.bind(this));

    } 
    childDisplay() {
        let childs=[];
        let selected=childSelect.options[childSelect.selectedIndex].value;
        let readChilds = document.getElementsByClassName('child');
        for (let i=0;i<4;i++) {
            childs.push(readChilds[i]);
        }
        childs.forEach(element => {
            element.setAttribute("style","display:none");
        })
        for (let i=0;i<selected;i++) {
            childs[i].setAttribute("style","display:block");
        }
    }
    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton= $('.js-finish');
        
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultaction);
    }
    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas.
    let currentStep = +step.replace(/^step\-/, '');
    let goToStep = '.step-';
    let nextStep;
    nextStep =(direction=== 'next')?currentStep + 1:currentStep - 1;
    goToStep += nextStep;
    this.progressBar(Math.round(nextStep*33.33));
    return goToStep;
}
    changeAction(evt,direction='next'){
        let current = $(evt.currentTarget);
        let formStep = current.parents('.form-step');
        
        formStep.addClass('d-none');
        this.preventDefaultaction(evt);
        let step = $(this.goToStep(formStep[0].classList[1], direction));
        step.removeClass('d-none');
    }
    previousAction(evt) {this.changeAction(evt,'prev');}

    nextAction(evt) {this.changeAction(evt);}
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $(".progress-bar");
        $progressBar.css("width", percent + "%");
        $progressBar.html(percent + "%");
      }
    }
