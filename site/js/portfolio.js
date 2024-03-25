 const bannerImg = document.getElementById('bannerImg');

 const changeBannerImg = () => {
    bannerImg.addEventListener('click', () => {
        if(bannerImg.src === "image/avatar-bis.png") {
        bannerImg.src = "image/avatar.svg";
        } else {
        bannerImg.src = "image/avatar-bis.png";
        }
    });
 }

changeBannerImg();