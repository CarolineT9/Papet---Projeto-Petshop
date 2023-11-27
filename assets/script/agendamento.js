// Função para agendar um novo horário
function agendar() {
    var proprietario = document.getElementById('proprietario').value;
    var pet = document.getElementById('pet').value;
    var portePet = obterPorteSelecionado();
    var servico = document.getElementById('servico').value;
    var dataAgendamento = document.getElementById('dataAgendamento').value;

    //Valida o preenchimento dos campos
    if (!proprietario || !pet || !portePet || !servico || !dataAgendamento) {
        alert('Por favor, preencha todos os campos.');
        return;
    }


    var regexData = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexData.test(dataAgendamento)) {
        alert('Formato de data inválido. Use o formato AAAA-MM-DD.');
        return;
    }


    var agendamento = {
        proprietario: proprietario,
        pet: pet,
        portePet: portePet,
        servico: servico,
        dataAgendamento: dataAgendamento
    };

    adicionarAgendamento(agendamento);

    document.getElementById('formAgendamento').reset();
}

function obterPorteSelecionado() {
    var portes = document.getElementsByName('porte');
    for (var i = 0; i < portes.length; i++) {
        if (portes[i].checked) {
            return portes[i].value;
        }
    }
    return null; 
}


function adicionarAgendamento(agendamento) {
    var listaAgendamentos = document.getElementById('listaAgendamentos');


    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `<strong>${agendamento.proprietario}</strong> - ${agendamento.pet} (${agendamento.servico}) - ${agendamento.dataAgendamento}`;

    listaAgendamentos.appendChild(listItem);
}

