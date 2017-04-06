function Tela(){
    this.altura = $(window).height();

    this.Ajustar = function(operador){
        $(operador).css("min-height", this.altura);
    };
}