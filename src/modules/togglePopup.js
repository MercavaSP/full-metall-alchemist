const togglePopup = () => {
    
    const popup = document.querySelector('.modal-callback'),
        overlay = document.querySelector('.modal-overlay'),
        popupBtn = document.querySelectorAll('.callback-btn'),
        popupClose = document.querySelector('.modal-close');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
            // console.log('1 :>> ', 1);
        });
    });
    
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
};

export default togglePopup;