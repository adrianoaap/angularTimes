angular.module("times").controller("timesCtrl", function($scope) {
  var vm = this;
  vm.times = [];
  vm.time = {}

  vm.adcionarTime = adcionarTime

  vm.parei =' na aula 3 11 minutos'
  vm.titulo = 'Lista Time'
  vm.timesFutebol = [
    { name: "Flamengo", mascote: "Urubu"},
    { name: "Grêmeo", mascote: "Mosqueteiro" },
    { name: "Santos", mascote: "Peixe"}
  ];
  vm.estados = [
      { name: 'Rio de janeiro', uf: 'RJ'},
      { name: 'Rio Grande do Sul', uf: 'RS'},
      { name: 'São Paulo', uf: 'SP'}
  ]

  function adcionarTime(time){
    vm.timesFutebol.push(angular.copy(time))
    delete vm.time
  }
});
