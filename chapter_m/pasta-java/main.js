// java andré (a helena ajudou hihi)⁄⁄

const message = 'Tenho boas memórias do tempo que passámos no parque, em Berlim. <br> <br> Lembro-me de dar beijos no comboio fantasma, de ser apanhado a fumar, pela minha mãe, na cabina da roda-gigante, de espreitar os visitantes em ângulos que só eu conhecia… <br> <br> Mas depois começaram as avarias constantes. Primeiro foi a Ciclone. <br> Um escândalo, jornais, processos, indemnizações... <br> <br> Depois, foram as outras atrações. Abriram parques mais modernos, mais voltados para o futuro. E os jovens de Leste, depois de atravessar o Muro, precisavam do futuro. Desesperadamente. <br> <br>O nosso parque de diversões em Berlim fechou. <br><br>Já não tínhamos lugar. <br><br>Nós éramos o passado.';

const typingPromises = (message, timeout) =>
  [...message].map(
    (ch, i) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(message.substring(0, i + 1));
        }, timeout * i);
      })
  );

typingPromises(message, 55).forEach(promise => {
  promise.then(portion => {
    document.querySelector('p').innerHTML = portion;
  });
});

