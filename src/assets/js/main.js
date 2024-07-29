function openImage(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex='99999';
    console.log("Harvey");
    const modalImage = document.createElement('img');
    modalImage.src = src;
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';

    modal.onclick = function() {
        document.body.removeChild(modal);
    };


    modal.appendChild(modalImage);

    document.body.appendChild(modal);
}
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const botnav = document.querySelector(".newnav");
    const mob = document.querySelector(".mob-nav");
    if(window.innerWidth <= 800){
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            botnav.style.opacity = "0.3";
            mob.style.opacity = "0";
            mob.style.visibility = "hidden";
        } else {
            botnav.style.opacity = "1";
            mob.style.opacity = "1";
            mob.style.visibility = "visible";
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
  const followButtons = document.getElementsByClassName('followButton');

  for (let i = 0; i < followButtons.length; i++) {
    followButtons[i].addEventListener('click', function() {
      if (this.textContent === 'Follow') {
        this.textContent = 'Following';
      } else {
        this.textContent = 'Follow';
      }
    });
  }
});
