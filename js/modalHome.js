const modalHome = document.getElementById('modal_home');
const btnCloseModalHome = document.getElementById('btn_close_modal_home');



setTimeout(function () {
    modalHome.showModal();
  }, 2000);


  
btnCloseModalHome.addEventListener('click', () => {
    modalHome.close();
})