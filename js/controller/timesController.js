angular.module("times").controller("timesCtrl", function($scope) {
  var vm = this;
  vm.times = []
  vm.estados = []
  vm.time = {}

  vm.adcionarTime = adcionarTime

  vm.parei =' na aula 3 17 minutos '
  vm.titulo = 'Lista Time'

  vm.timesFutebol = [
    { name: "Flamengo", mascote: "Urubu"},
    { name: "Gama", mascote: "Piriquito" },
    { name: "Ponte Preta", mascote: "Macaca"}
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
});
