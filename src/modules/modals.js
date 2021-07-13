// const modals = () => {
//     function bindModal(trigger, modal, close) {
//         trigger.addEventListener('click', (event) => {
//             if (event.target) {
//                 event.preventDegault();
//             }

//             modal.style.display = "block";
//             document.body.style.overflow = "hiden";
//         });

//         close.addEventListener('click', () => {
//             modal.style.display = "none";
//             document.body.style.overflow = "";   
//         });
//     }

//     const popupBtn = document.querySelector('.callback-btn'),
//         modal = document.querySelector('.modal-callback'),
//         popupClose = document.querySelector('.modal-close');

//     bindModal(popupBtn, modal, popupClose);
// };


// export default modals;