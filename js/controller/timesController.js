angular.module("times").controller("timesCtrl", function($scope) {
  var vm = this;
  vm.times = []
  vm.estados = []
  vm.time = {}

  vm.adcionarTime = adcionarTime
  vm.apagarTime = apagarTime

  vm.titulo = 'Lista Time'

  vm.timesFutebol = [
    { name: "Flamengo", mascote: "Urubu"},
    { name: "Santos", mascote: "Peixe" },
    { name: "Grêmeo", mascote: "Mosqueteiro"}
  ];
  vm.estados = [
      { nome: 'Rio de janeiro', uf: 'RJ'},
      { nome: 'Brasilia', uf: 'DF'},
      { nome: 'Campinas', uf: 'SP'}
  ]

  function adcionarTime(time){
    vm.timesFutebol.push(angular.copy(time))
    delete vm.time
  }

  function apagarTime(timesFutebol){
    vm.timesFutebol = timesFutebol.filter(function(time){
      if(!time.selecionado)
       return time
    })
  }

  vm.ordenarPor = function(campo){
     vm.criterioDeOrdenacao = campo
     vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao
  }

 
});
